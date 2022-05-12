import React from "react";
import MosaicLeft from "../../Components/Mosaic/MosaicLeft";
import MosaicRight from "../../Components/Mosaic/MosaicRight";

export default function supplements() {
    return (
        <div>
            <h3>Supplentsn</h3>
            <h3>Supplentsn</h3>
            <h3>Supplentsn</h3>

            <div className="full-page border-bottom">
                <img
                    src={require("../../Assets/membership/membershipoptions.jpg")}
                    alt=""
                />
                <div className="centered">
                    <h3>SUPPLEMENTS</h3>
                    <h3>PRE & POST WORKOUT</h3>
                </div>

                <section>
                    <h3>We stock a wide range of supplements.</h3>
                    <p>
                        To reach your maximum benefits or to aid your body
                        post-workout, our qualified trainers are more than keen
                        to advise you exactly what your vitamin, mineral &
                        supplement needs are.
                    </p>
                </section>

                <MosaicLeft
                    image={require("../../Assets/features/supplements2.jpg")}
                    title="Protein"
                    paragraph1="Protein is a macronutrient you need to consume each day to support growth, tissue maintenance and immune health. Protein supplements, available as powders, shakes or bars, provide high-quality protein to your diet and can boost your protein intake on days you don’t eat sufficient whole-food proteins. They can also supply specific benefits to promote fitness. For instance, whey-based supplements are rich in branched-chain amino acids, which can speed muscle recovery after an intense workout. "
                    paragraph2="On the other hand, protein supplements can add an unnecessary expense to your budget, because whole foods can give you all the protein you need. In addition, while consuming more protein than your body can use is not harmful if you are in good health, if it adds extra calories to your diet you may wind up gaining unwanted weight. Our trainers will help you measure and monitor your protein intake."
                />
                <MosaicRight
                    image={require("../../Assets/features/supplements1.jpg")}
                    title="Vitamins & Minerals"
                    paragraph1="Vitamins and minerals support a wide variety of functions in your body, and the amounts you need vary depending on your age and health status. Supplements can help maintain optimal health if your dietary intake is low, whether because you are on a calorie-restricted diet or because you don’t like eating particular foods containing a specific nutrient. However, consuming too much of some vitamins or minerals can adversely affect your well-being. "
                    paragraph2="Fat-soluble vitamins can accumulate in your fat tissue if you routinely take in more than you need; for instance, too much vitamin A over time can cause liver abnormalities and birth defects. Toxicity can also occur from overconsumption of minerals. Excess iron, magnesium, selenium or zinc can all cause digestive problems, too much calcium might dispose you to kidney stone formation and high manganese intake can lead to neurotoxicity. Our trainers will ensure you are taking the right amounts."
                />
            </div>
        </div>
    );
}
