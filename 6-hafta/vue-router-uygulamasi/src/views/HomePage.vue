<template>
    <div>
      <div class="d-flex justify-content-end">
        <button class="btn btn-primary btn-sm" @click="$router.push({name:'NewBookmark'})">Ekle</button>
      </div>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Başlık</th>
            <th scope="col">Açıklama</th>
            <th scope="col">Url</th>
            <th scope="col">Sil</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="bookmark in bookmarkList" :key="bookmark.id">
            <td>{{ bookmark.id }}</td>
            <td>{{ bookmark.title }}</td>
            <td>{{ bookmark.description }}</td>
            <td> <a href="bookmark.url" target="_blank">{{ bookmark.url }}</a></td>
            <td><button class="btn btn-sm btn-danger" @click="deleteBookmark(bookmark)">Sil</button></td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
    data(){
        return {
            bookmarkList : []
        }
    },
    created(){
        this.$appAxios.get("/bookmarks").then(bookmarks_list_response => {
            this.bookmarkList = bookmarks_list_response.data || []//burda dizi döner ve diziyi bookmarkListe atar
        })
    },
    methods:{
      deleteBookmark(bookmark){
        this.$appAxios.delete(`/bookmarks/${bookmark.id}`).then(delete_response =>{
          if(delete_response.status===200){
            this.bookmarkList = this.bookmarkList.filter(k => k.id !== bookmark.id)
          }
        })

      }
    }
}

</script>

  