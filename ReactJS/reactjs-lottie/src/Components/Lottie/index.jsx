import React from 'react'
import Lottie from 'react-lottie'

const LottieAnimation = (props) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,        
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    if (props.animationData) {
        defaultOptions.animationData = props.animationData
    }  
    else {
        defaultOptions.path = props.animationPath  
    }
    return (
        <div>
            <Lottie options={defaultOptions}
                    height={props.heigth ? props.heigth : 400}
                    width={props.width ? props.width : 400} />
         </div>
    )
}

export default LottieAnimation;