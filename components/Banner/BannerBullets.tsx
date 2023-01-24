export enum BannerBulletsType {
  Blue, Yellow, Tosca
}

export interface BannerBulletsInterface {
  content: string;
  type: BannerBulletsType;
}

export function BannerBullets(model: BannerBulletsInterface) {
  let type: string

  switch (model.type) {
    case BannerBulletsType.Blue:
      type = "./shared/bullets/blue.png"
      break;
    case BannerBulletsType.Yellow:
      type = "./shared/bullets/yellow.png"
      break;
    case BannerBulletsType.Tosca:
      type = "./shared/bullets/tosca.png"
      break;
  }

  return (
    <div className="mt-8 md:mt-8">
      <div className="flex align-center space-x-4 text-black my-4">
        <img src={type} className="h-8 w-fit my-auto" />
        <span className="text-justify text-body font-montserrat font-regular">
          {model.content}
        </span>
      </div>
    </div>
  )
}