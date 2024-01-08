import { BannerContainer, BannerImage } from "./Banner.style";
import img from "../../../../assets/predef/1.png";
import { ThemeCreatorContext } from "../../../../contexts/ThemeCreatorContext";
import { useContext } from "react";

export default function Banner() {
  const themeCreator = useContext(ThemeCreatorContext);

  return (
    <>
      {themeCreator.getOption("banner").value ? (
        <BannerContainer>
          {themeCreator.getOption('picture').value && <BannerImage src={themeCreator.bannerImg || img} />}
          {themeCreator.getOption('text').value && <span>{themeCreator.getOption('textValue').value}</span>}
        </BannerContainer>
      ) : (
        <BannerContainer>
          <span style={{ opacity: 0.5, userSelect: "none" }}>
            Brak banera
          </span>
        </BannerContainer>
      )}
    </>
  );
}
