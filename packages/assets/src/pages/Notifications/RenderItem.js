import NotificationPopup from '@assets/components/NotificationPopup/NotificationPopup';
import React from 'react';
import {ResourceItem} from '@shopify/polaris';
import {api} from '@assets/helpers';
import timestampToRelativeTime from '@assets/helpers/utils/timestampToRelativeTime';

const renderItem = item => {
  const {firstName, city, productName, country, timestamp, productImage, id} = item;
  const time = timestampToRelativeTime(timestamp);

  const handleDeleteNotification = async id => {
    console.log('123123123');
    try {
      const res = await api(`/notifications/${id}`, {
        method: 'DELETE'
      });
      console.log('res', res);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <ResourceItem id={id}>
      <NotificationPopup
        onDeleteNotification={() => handleDeleteNotification(id)}
        id={id}
        firstName={firstName}
        city={city}
        productName={productName}
        country={country}
        timestamp={timestamp}
        productImage={productImage}
        time={time}
      />
    </ResourceItem>
  );
};

export default renderItem;
