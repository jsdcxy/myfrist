import Vue from 'vue'
export default {
    data() {
      return {
        images: [],
        currentDate: new Date()
      };
    },
    created() {
      this.getImages()
    },
    methods: {
      getImages() {
          Vue.$http.get('/shiwu').then(res => {
              this.images =res.data
              //console.log(res)
          }).catch(function (error) {
              console.log(error);
            });
      }
    }
  }
