import React from 'react';
import ContentLoader from 'react-content-loader';

import liked from '../../img/liked.svg';
import unliked from '../../img/unliked.svg';

import btnChecked from '../../img/btn-checked.svg';
import btnPlus from '../../img/btn-plus.svg';
import AppContext from '../../context';
import styles from './Card.module.scss';

import icon1 from "../../img/sneakers/1.jpg"
import icon2 from "../../img/sneakers/2.jpg"
import icon3 from "../../img/sneakers/3.jpg"
import icon4 from "../../img/sneakers/4.jpg"
import icon5 from "../../img/sneakers/5.jpg"
import icon6 from "../../img/sneakers/6.jpg"
import icon7 from "../../img/sneakers/7.jpg"
import icon8 from "../../img/sneakers/8.jpg"
import icon9 from "../../img/sneakers/9.jpg"
import icon10 from "../../img/sneakers/10.jpg"

const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10]


function Card({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = { id, parentId: id, title, imageUrl, price };

  const onClickPlus = () => {
    onPlus(obj);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img src={isFavorite ?  liked  :  unliked } />
            </div>
          )}
          <img width="100%" height={135} src={icons[imageUrl]} alt='sneakers'/>
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src= { isItemAdded(id) ? btnChecked : btnPlus}
                alt="Plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
