import React, { Component } from "react";
import styles from "../Components/Main.module.css";

class Main extends Component {
  product = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state={
    img: this.product[0].url,
    branch:this.product[0].name,
    desc:this.product[0].desc
  }

  changeGlasses(index){
    this.setState({
        img: this.product[index].url,
        branch: this.product[index].name,
        desc: this.product[index].desc
    });
    
  }

  renderProduct(){
    const arrPro = this.product.map((item)=>{
        return (
            <div key={item.id} className={styles._1item}>
                <img onClick={()=>this.changeGlasses(item.id-1)} src={item.url} />
            </div>
        );
    })
    return arrPro
  }

  render() {

    const animationGlasses = `@keyframes zoom${Date.now()} {
      0%{
          transform: scale(0);
      }
      
      100%{
          transform: scale(1);
      }
  }`
  const glasses = {
    animation: `zoom${Date.now()} 0.5s`
  }

    return (
      <section className={styles.main} style={{backgroundImage:'url(./glassesImage/background.jpg)'}}>
        <style>
          {animationGlasses}
        </style>
        <div className={styles.content}>
          <div className={styles.img}>
            <div className={styles.content_img}>
              <img src="./glassesImage/model.jpg"  />
              <div className={styles.glasses_posi}>
                <img style={glasses} src={this.state.img}  />
              </div>
              <div className={styles.desc}>
                  <h5>{this.state.branch}</h5>
                  <p>{this.state.desc}</p>
              </div>
            </div>
            <div className={styles.img2}>
              <img src="./glassesImage/model.jpg"/>
            </div>
          </div>
          <div className={styles.list_choose}>
            <div className={styles.content}>
              {this.renderProduct()}
              
            </div>
          </div>
        </div>
        <div className={styles.bg_dark_posi} />
      </section>
    );
  }
}

export default Main;
