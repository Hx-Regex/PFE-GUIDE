import React from 'react';

class Carousel extends React.Component {
  render() {
    return (
      <div className="col-md-5">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="img-box">
                <img width="400px" src="https://cdn.discordapp.com/attachments/885868702258585601/1114699668924924004/Screenshot_1685830293_iphone13prosierrablue_portrait.png" alt="" />
              </div>
            </div>
            <div className="carousel-item">
              <div className="img-box">
                <img width="400px" src="https://cdn.discordapp.com/attachments/885868702258585601/1114699669184978954/splashi_iphone13prosierrablue_portrait.png" alt="" />
              </div>
            </div>
            <div className="carousel-item">
              <div className="img-box">
                <img width="400px" src="https://cdn.discordapp.com/attachments/885868702258585601/1114699668543262820/Screenshot_1685830308_iphone13prosierrablue_portrait.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;