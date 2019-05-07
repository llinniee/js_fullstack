import Notify from '../dist/notify/notify';
Page({
  data: {
    groupName: '',
    newGroupModal: false
    },
  onGroupNameChange(event) {
    this.setData({
      groupName: event.detail
    })
  },
  colseDialog() {
    this.setData({
      newGroupModal: false
    })
  },
  creatGroup() {
    let self = this
    if(self.data.groupName === '') {
      Notify({
        text: '起个名字吧',
        duration: 1500,
        selector: '#notify-seletion',
        backgroundColor: '#dc3545'
      });
      self.selectComponent('#new-group-modal').stopLoading()
      return
    }
  },
  showNewGroupModal() {
    this.setData({
      newGroupModal: true
    })
  }
});