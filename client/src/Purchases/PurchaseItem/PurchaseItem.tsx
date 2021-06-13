import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// Types
import { PurchaseType } from '../../App';
// Styles
import { Wrapper } from './PurchaseItem.styles';
import CartItem from '../../Cart/CartItem/CartItem';

type Props = {
    item: PurchaseType;
};

const convertToDateString = (dateString: Date | undefined): string => {
    return new Date(dateString ?? '').toDateString();
}

const PurchaseItem: React.FC<Props> = ({ item }) => (
    <Wrapper className='purchase-item' data-cy={`recent-purchase-item-${item.createdAt}`}>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <h3>{convertToDateString(item.updatedAt)}</h3>
                <div className='information'>
                    <p>Total Price: ${Number(item.totalPrice).toFixed(2)}</p>
                    <p>Total Items: {item.totalItems}</p>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <div className='cheeses'>
                    {item.cheeses?.map(cheese => (
                        <CartItem
                            key={cheese.id}
                            item={cheese}
                        />
                    ))}
                </div>
            </AccordionDetails>
        </Accordion>
    </Wrapper>
);

export default PurchaseItem;
