import { mapGetters , mapMutations, mapActions } from 'vuex'

export const searchMixin = {
  data () {
    return {
      query: '',
      refreshDelay: 120
    }
  },
  computed: {
    ...mapGetters([
      'searchHistory'
    ])
  },
  methods: {
    onQueryChange (query) {
      // console.log(query)
      this.query = query.trim()
    },
    blurInput () {
      this.$refs.searchBox.blur()
    },
    addQuery (query) {
      this.$refs.searchBox.setQuery(query)
    },
    saveSearch (data) {
      console.log(data)
      this.selectPlaySong(data)
      // this.$store.dispatch('saveSearchHistory', data)
      this.saveSearchHistory(this.query)
    },
    ...mapActions([
      'saveSearchHistory',
      'selectPlaySong'
    ])
  }
}

export const playerMixin = {
  computed: {
    ...mapGetters([
      'playList',
      'currenSong',
      'currentIndex',
      'favoriteList'
    ]),
    favoriteIcon () {
      return this.getFavoriteIcon(this.currentSong)
    }
  },
  methods: {
    toggleFavorite (song) {
      if (this.isFavorite(song)) {
        this.deleteFavoriteList(song)
      } else {
        this.saveFavoriteList(song)
      }
    },
    getFavoriteIcon (song) {
      if (this.isFavorite(song)) {
        return 'icon-favorite'
      }
      return 'icon-not-favorite'
    },
    isFavorite (song) {
      const index = this.favoriteList.findIndex((item) => {
        return item.id = song.id
      })
      return index > -1
    },
    ...mapMutations({
      setPlayList: 'SET_PLSYLIST',
      setCurrentIndex: 'SET_CURRENT_INDEX',
      setPlaying: 'SET_PLAYING'
    }),
    ...mapActions([
      'saveFavoriteList'
    ])
  }
}