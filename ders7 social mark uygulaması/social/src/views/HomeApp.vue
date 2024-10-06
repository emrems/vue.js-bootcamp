<template>
  <appHeader />
  <!--  <appHeader/> main.js içinde global olarak import edilmiştir -->
  <div class="flex flex-row">
    <SidebarComponent @category-changed="updateBookmarkList" />
    <!--  appBookMarkList global olarak import edildiği için main.js de bu şekilde kısa bir şekilde kullanabilirsin-->
    <appBookMarkList v-if="bookmarkList.length > 0" :items="bookmarkList"/>
    <div v-else>bookmark bulunamadı</div>
  </div>
  
</template>
<script>
import SidebarComponent from "@/components/Home/SidebarComponent.vue";
export default {
  data() {
    return {
      bookmarkList: [],
    };
  },
  components: {
    SidebarComponent: SidebarComponent,
  },
  created() {
    this.$appAxios("/bookmarks")
      .then((bookmarksResponse) => {
        console.log(bookmarksResponse.data); // Yanıtı kontrol et
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
            console.error("Veri çekme hatası:", error.response ? error.response.data : error.message);
          });
      })
      .catch((error) => {
        console.error("Veri çekme hatası:",  error.response ? error.response.data : error.message);
      });
  },
  methods: {
    updateBookmarkList(categoryId) {
      const url = categoryId
        ? `/bookmarks?categoryId=${categoryId}`
        : `/bookmarks`;

      this.$appAxios
        .get(url)
        .then((bookmark_list_response) => {
          const bookmarks = bookmark_list_response?.data || [];

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
              const users = responses
                .slice(bookmarks.length)
                .map((r) => r.data);

              // bookmarks ile user ve category bilgilerini birleştir
              const expandedBookmarks = bookmarks.map((bookmark, index) => ({
                ...bookmark,
                category: categories[index],
                user: users[index],
              }));

              // Sonuçları bookmarkList'e ata
              this.bookmarkList = expandedBookmarks;
            })
            
            });
        
        
        
    },
  },
};
</script>
