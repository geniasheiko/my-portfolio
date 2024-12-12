import React from 'react';
import styled from 'styled-components';
import portfolio from '../../../../assets/images/portfolio.jpg'; 
import { Photo } from '../../../../components/photo/Photo';
import { Text } from '../../../../components/Text';

export const MyWork = () => {
    return (
        <MyWorkConteiner>
        <Photo src={portfolio} width={"272px"} height={"320px"} 
        alt={"My photo"}></Photo>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. 
            Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.</Text>
        </MyWorkConteiner>
       
    );
};

const MyWorkConteiner = styled.div`
    
`
