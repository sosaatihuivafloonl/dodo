import { useState, useEffect } from "react";
import { Container, Box, TextField } from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import categoriesImg from '../../img/categories.svg';
import favoriteImg from '../../img/favorite.svg';
import messageImg from '../../img/message.svg';
import editImg from '../../img/edit.svg';
import loaderImg from '../../img/loader.svg';
import { withStyles } from "@mui/styles";
import cardType from 'credit-card-type';
import axios from 'axios';

import './mobile_cart.css'

function mobileCart () {

	const styles = {
		root: {
		  "& label.Mui-focused": {
			color: "#57585a",
		  },
		  "& .MuiInput-underline:after": {
			borderBottom: "1px solid #008f79"
		  },
		  "& .MuiInput-underline:before": {
			borderBottomColor: "#c5c5c6"
		  },
		  "& .MuiOutlinedInput-root": {
			"& fieldset": {
			  borderColor: "#e0dfe7",
			},
			"&:hover fieldset": {
			  borderColor: "#946cdc",
			},
			"&.Mui-focused fieldset": {
			  borderColor: "#7f56da",
			},
		  },
		},
	  };
	  
	  const CSSTextField = withStyles(styles)(TextField);


// Field Text settings
const theme = createTheme({
	typography: {
		// fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Droid Sans,Helvetica Neue,sans-serif;',
		fontSize: 15,
	},
	});



	return (
		<>
		<Container disableGutters maxWidth={false}  sx={{  mx: 'auto'}}>
			<div className="main">
				<div className="main-header">
					<div className="main-header-container">
						<div className="main-header-container-wrapper">
							<div className="main-header-container-wrapper-back-button">
								<button>
								<svg  class="" fill="#57585a" fill-rule="nonzero" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
									<path d="M4.414 13l5.293 5.293a1 1 0 1 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 1.414L4.414 11H22a1 1 0 0 1 0 2H4.414z" id="iconBack"></path>
								</svg>
								</button>
							</div>
							<div className="main-header-container-wrapper-text">
								<p>Order request</p>
							</div>
							<div className="main-header-container-field"></div>
						</div>
					</div>
				</div>
				<div className="main-product-info">
					<span>
						<img src="https://media.karousell.com/media/photos/products/2023/7/3/jean_set_s_size_1688419726_0a89323a.jpg" alt="" srcset="" />
					</span>
					<p>JEAN SET S SIZE</p>
					<h2>RM37.00</h2>
				</div>
				<a className="main-support-link" href="https://support.carousell.com/hc/articles/360038194893">
					<img src="https://sl3-cdn.karousell.com/components/Caroupay_v4.svg" alt="" />
					<div className="main-support-link-text-header" style={{marginLeft: '8px'}}>
						<p>Tawaran yang lebih selamat apabila anda membayar melalui Carousell</p>
						<h2>Bayaran hanya dikeluarkan kepada penjual selepas anda menerima pesanan anda seperti yang disenaraikan</h2>
					</div>
					<svg style={{flexShrink: 0, height: '24px', width: '24px'}} fill="#57585a" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"></path>
					</svg>
				</a>
				<button className="main-delivery-button">
					<div className="main-delivery-button-body">
						<p>Delivery</p>
						<h2>Choose a deal method</h2>
					</div>
					<svg fill="#57585a" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"></path></svg>
				</button>
				<button className="main-payment-button">
					<div className="main-payment-button-body">
						<p>Payment</p>
						<h2>Choose a payment method</h2>
					</div>
					<svg fill="#57585a" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"></path></svg>
				</button>
				<div className="main-promo-code">
					<div style={{display: 'flex', flexDirection: 'row'}}>
						<ThemeProvider theme={theme}>
							<CSSTextField 
							id="standard-basic" 
							label="Promo code" 
							variant="standard" 
							style={{width: '100%', marginRight: '8px'}}
							/>
						</ThemeProvider>
						<button className="promo-code-button-apply">Apply</button>
					</div>
				</div>
				<div className="main-footer-container" style={{marginTop: '52px'}}>
					<h2>Payment Summary</h2>
					<div className="main-footer-container-payment-info">
						<div className="main-footer-container-payment-info-header">
							<div className="main-footer-container-payment-info-header-item">
								<p>Item price</p>
							</div>
							<h2>RM37.00</h2>
						</div>
						<div className="main-footer-container-payment-info-footer">
							<h3>Total</h3>
							<h3>RM37.00</h3>
						</div>
					</div>
				</div>
				<p className="footer-container">
					By tapping on ‘Place order’, you accept the terms of service from&nbsp;
					<a style={{display: 'inline', color: 'inherit', textDecoration: 'none'}} href="https://support.carousell.com/hc/articles/115011881808"><span className="span-carousell">Carousell</span></a>
					,&nbsp;
					<a style={{display: 'inline', color: 'inherit', textDecoration: 'none'}}  href="https://stripe.com/en-my/connect-account/legal"><span className="span-carousell">Stripe</span></a>
					.
				</p>
				<div className="main-footer-button-order">
					<button>Place order</button>
				</div>


			</div>
		</Container>
		</>

	);
}

export default mobileCart

