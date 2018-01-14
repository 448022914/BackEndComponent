import React from "react";

import "./upload.scss";

const data = [
  {path: ""},{path: ""},{path: ""},{path: ""},{path: ""},{path: ""},
];

export default class Upload extends React.Component{
  constructor(props){
    super(props);
    this.startX = 0;
    this.distance = 0;
    this.onRemove = this.onRemove.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.state = {
      list: data,
      isView: false,
      curIndex: 0,
      listWidth: "auto",
      itemWidth: "auto",
    };
  }
  onRemove(index){
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({ list });
  }
  onOpen(){
    let list = this.state.list;
    this.setState({
      isView: true,
    });
  }
  onClose(){

  }
  onTouchStart(e){
    this.startX = e.touches[0].pageX;
  }
  onTouchMove(e){
    this.distance = Math.floor(e.touches[0].pageX - this.startX);
  }
  onTouchEnd(){
    let { list, curIndex } = this.state;
    if(this.distance < -30){
      if(curIndex <= -list.length+1) return;
      curIndex--;
      this.setState({ curIndex });
      return ;
    }

    if(this.distance > 30){
      if(curIndex >= 0) return;
      curIndex++;
      this.setState({ curIndex });
      return ;
    }
  }
  onAdd(){
    if(this.props.onAdd){
      this.props.onAdd();
    }
  }
  componentWillMount(){
    this.setState({
      listWidth: document.body.clientWidth * this.state.list.length,
      itemWidth: document.body.clientWidth,
    });
  }
  render(){
    const props = this.props;
    let result = [], sum = [];
    let {list, isView, listWidth, itemWidth, curIndex} = this.state;
    let boxNum = Math.ceil((list.length+1) / props.col) * props.col;

    Array.from({length: boxNum}).forEach((item, index) => {
      let content = null;
      if(index < list.length){
        content = <div className="up-img-item">
          <div onClick={() => this.onRemove(index)} className="up-remove-btn">x</div>
          <img onClick={() => this.onOpen(index)} src={list[index].path}/>
        </div>;
      }
      if(index === list.length){
        content = <div onClick={() => this.onAdd} className="up-img-item up-add-btn"></div>;
      }
      if(index%props.col === props.col-1){
        result.push(<div className="upload-flexbox">{sum}<div className="up-flexbox-item">{content}</div></div>);
        sum = [];
      }else{
        sum.push(<div className="up-flexbox-item">{content}</div>);
      }
    });
    return(
      <div>
        <div className="upload-img-box">{result}</div>
        <div className="img-preview-box">
          {
            isView ? 
              <div className="preview-mask">
                <div className="preview-box">
                  <ul className="preview-list" 
                    onTouchStart={this.onTouchStart}
                    onTouchMove={this.onTouchMove}
                    onTouchEnd={this.onTouchEnd}
                    style={{width: listWidth + "px", left: curIndex * itemWidth + "px"}}>
                    {
                      list.map((item) => {
                        return <li style={{width: itemWidth + "px"}} key={Math.random()}><img src={item.path}/></li>;
                      })
                    }
                  </ul>
                </div>
              </div>
              : null
          }
        </div>
      </div>
    );
  }
}

Upload.defaultProps = {
  col: 4
};