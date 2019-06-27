import { mapGetters ,mapMutations, mapActions } from 'vuex'

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