import Skeleton from "react-loading-skeleton"


const CardSkeleton = ({cards}) => {
  return Array(cards)
  .fill(0)
  .map((_, i) => (
      <div className="card-skeleton" key={i}>
          <div className="img-row">
              <Skeleton width={'286px'} height={'200px'} />
          </div>
          <div className="info-row">
              <Skeleton height={'178px'}/>
          </div>
          
      </div>
  ));
};

export default CardSkeleton