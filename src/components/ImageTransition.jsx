import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { getTrackImgSrc } from "./EPTrack";

class ImageTransition extends Component {
  render() {
    return (
      <div>
        <CSSTransition
          in={this.props.mediaTag ? true : false}
          timeout={400}
          classNames="show-image"
          unmountOnExit
          appear
          onEntered={this.props.setMediaTag}
          onExit={this.props.setMediaTag}
        >
          <div>
            <img
              className="Current-music-card__image"
              src={getTrackImgSrc(this.props.mediaTag)}
              alt="track-img"
            />
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default ImageTransition;
