<template>
  <div class="form-area">
    <div class="mb-3">
      <label for="title" class="form-label">Başlık</label>
      <input
        v-model="userData.title"
        type="text"
        class="form-control"
        id="title"
        placeholder="Doküman"
      />
    </div>
    <div class="mb-3">
      <label for="url" class="form-label">URL</label>
      <input
        v-model="userData.url"
        type="text"
        class="form-control"
        id="url"
        placeholder="Resmi doküman"
      />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Açıklama</label>
      <input
        v-model="userData.description"
        type="text"
        class="form-control"
        id="description"
        placeholder="Bir şeyler yaz"
      />
    </div>
    <button
      type="button"
      class="btn btn-sm btn-secondary"
      @click="$router.push({ name: 'HomePage' })"
    >
      İptal
    </button>
    <button
      type="button"
      class="btn btn-sm btn-primary"
      @click="onSave"
    >
      Kaydet
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        title: null,
        url: null,
        description: null,
      },
    };
  },
  methods: {
    onSave() {
      // Tüm alanlar doldurulmuş mu kontrol edelim
      if (!this.userData.title || !this.userData.url || !this.userData.description) {
        alert("Lütfen tüm alanları doldurun!");
        return;
      }

      // Axios ile post isteği gönderme
      this.$appAxios.post("/bookmarks", this.userData).then((save_response) => {
        console.log(save_response); // Dönen yanıtı konsolda görebilirsiniz
        this.resetData(); // Verileri sıfırla
        this.$router.push({ name: 'HomePage' }); // Ana sayfaya yönlendir
      });
    },
    resetData() {
      // userData içindeki her verinin değerini sıfırlar
      Object.keys(this.userData).forEach((key) => (this.userData[key] = null));
    },
  },
};
</script>
