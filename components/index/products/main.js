import Vue from 'vue'
export default {
    data() {
      return {
        images: [],
        tle:[],
        currentDate: new Date()
      };
    },
    created() {
      this.getImages();
      this.getTitle();
    },
    methods: {
      getImages() {
          Vue.$http.get('/shiwu').then(res => {
              this.images =res.data
              //console.log(res)
          }).catch(function (error) {
              console.log(error);
            });
      },
      getTitle() {
        Vue.$http.get('/menus').then(res => {
            this.tle =res.data
            //console.log(res)
        }).catch(function (error) {
            console.log(error);
          });
      }
    }
  }
