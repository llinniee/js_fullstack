import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props); //将componetn基类的方法执行一下，要用contructor 一定要super一下
    // 状态初始化 data => state
    this.state = {
      list: [
        '5点起床',
        'coding',
        '24点sleep'
      ],
      inputVal: ''

    }

  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    let {list, inputVal } = this.state
    return (
      <View className='index'>
        <Input className="index" type="text" 
        value={inputVal} 
        onInput={this.inputHandel.bind(this)}/>
        <Text className="add" onClick={this.addItem.bind(this)}>添加</Text>
       { 
         this.state.list.map((item, index) => {
           return <View>
             <Text>{index + 1}.{item}</Text>
             <Text className="del" onClick={this.delItem.bind(this,index)}>删除</Text>
           </View>
         })
       }
      </View>
    )
  }

  inputHandel (e) {
    this.inputVal = e.target.value;

  }
  addItem () {
    let {list} = this.state;
    const inputVal = this.inputVal;
    if (inputVal=='') return;
    else {
      list.push(inputVal)
    };
    this.setState({
      list,
      inputVal: ''
    })
  }
  delItem (index) {
    let {list} = this.state
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}
