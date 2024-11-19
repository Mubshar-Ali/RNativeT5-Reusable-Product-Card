import React from 'react';
import { Text, ScrollView } from 'react-native';
import Card from './styles'; // Default export
import ProductData from './ProductD'; // Default export

const Alfa = () => {
  const values = [0, 1, 2, 3, 4, 5, 6];
  const products = ProductData.filter((item) => values.includes(item.id));
  return (
    <ScrollView>
      {products.length > 0 ? (
        products.map((product) => (
          <Card
            key={product.id}
            uri={product.uri}
            name={product.name}
            price={product.price}
            rating={product.rating}
          />
        ))
      ) : (
        <Text> product is not found </Text>
      )}
    </ScrollView>
  );
};

export default Alfa;
