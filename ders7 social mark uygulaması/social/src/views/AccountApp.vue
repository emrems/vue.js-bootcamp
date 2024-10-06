<template>
<AppHeader/>
<div class="flex flex-row">
    <side-bar></side-bar>
    <component :is="$route.meta.componentName" :items="bookmarkList"/>
    <!-- <appBookMarkList v-if="bookmarkList.length > 0" :items="bookmarkList"/>
        <div v-else>bookmark bulunamadı</div> -->
</div>

</template>

<script>
import sideBar from '@/components/Account/sideBar.vue';
import AppHeader from '@/components/shared/appHeader.vue';

export default{
    components: {
        sideBar,
        AppHeader
    },
    data() {
    return {
      bookmarkList: [],
    };
  },
  created() {
    this.$appAxios("/bookmarks")
      .then((bookmarksResponse) => {
        const bookmarks = bookmarksResponse.data;

        // Tüm categoryId ve userId'leri alarak kategoriler ve kullanıcılar için istekler yap
        const categoryRequests = bookmarks.map((bookmark) =>
          this.$appAxios(`/categories/${bookmark.categoryId}`)
        );
        const userRequests = bookmarks.map((bookmark) =>
          this.$appAxios(`/users/${bookmark.userId}`)
        );

        // Tüm istekler tamamlandığında sonuçları işleyelim
        Promise.all([...categoryRequests, ...userRequests])
          .then((responses) => {
            const categories = responses
              .slice(0, bookmarks.length)
              .map((r) => r.data);
            const users = responses.slice(bookmarks.length).map((r) => r.data);

            // bookmarks ile user ve category bilgilerini birleştir
            const expandedBookmarks = bookmarks.map((bookmark, index) => ({
              ...bookmark,
              category: categories[index],
              user: users[index],
            }));

            this.bookmarkList = expandedBookmarks; // bookmarkList güncelleniyor
          })
          .catch((error) => {
            console.error("Veri işleme hatası:", error);
          });
      })
      .catch((error) => {
        console.error("Veri çekme hatası:", error);
      });
  },
}
</script>