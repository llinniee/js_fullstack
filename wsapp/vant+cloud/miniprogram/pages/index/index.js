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
    } else {
      wx.cloud.callFunction({
        name: 'createGroup',
        data: {
          groupName: self.data.groupName
        },
        success(res) {
          self.setData({
            newGroupModal: false,
            groupName: ''
          })
          Notify({
            text: '新建成功',
            duration: 1500,
            selector: '#notify-selector',
            backgroundColor: '#28a745'
          })
          setTimeout(() => {
            wx.switchTab({
              url: `/pages/group/group`,
            })
          },1500)
        },
        fail(error) {
          console.log(error)
        }
      })
    }
  },
  showNewGroupModal() {
    this.setData({
      newGroupModal: true
    })
  }
});