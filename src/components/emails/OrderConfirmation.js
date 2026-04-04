import * as React from 'react';

export const OrderConfirmationEmail = ({ orderId, items, total, customerName }) => (
    <div style={{ fontFamily: 'sans-serif', lineHeight: '1.6', color: '#333' }}>
        <h1 style={{ color: '#c8956c' }}>Bedankt voor je bestelling!</h1>
        <p>Beste {customerName || 'klant'},</p>
        <p>Bedankt voor je bestelling bij De Notenman. We gaan direct voor je aan de slag!</p>

        <div style={{ background: '#f5f5f7', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
            <h2 style={{ marginTop: 0 }}>Bestelling #{orderId}</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {items.map((item, index) => (
                    <li key={index} style={{ borderBottom: '1px solid #d2d2d7', padding: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
                        <span>
                            <strong>{item.qty}x</strong> {item.name || 'Product'}
                            {item.weightLabel && <span style={{ color: '#86868b', fontSize: '0.9em' }}> ({item.weightLabel})</span>}
                        </span>
                        <span>€{((item.price * item.qty)).toFixed(2)}</span>
                    </li>
                ))}
            </ul>
            <div style={{ borderTop: '2px solid #333', marginTop: '10px', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <span>Totaal</span>
                <span>€{(total / 100).toFixed(2)}</span>
            </div>
        </div>

        <p>Je ontvangt een aparte e-mail zodra je pakket is verzonden.</p>

        <hr style={{ border: 'none', borderTop: '1px solid #d2d2d7', margin: '30px 0' }} />

        <p style={{ fontSize: '0.85em', color: '#86868b' }}>
            De Notenman<br />
            Haaren, Nederland<br />
            <a href="mailto:info@denotenman.com" style={{ color: '#c8956c' }}>info@denotenman.com</a>
        </p>
    </div>
);

export default OrderConfirmationEmail;
