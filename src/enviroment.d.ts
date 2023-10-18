/// <reference types="react-scripts" />


interface INavbarButton {
	buttonText: string;
	path:string;
}

interface ILanguageButton{
	buttonText: string;
	value:string;
}

interface ITriggers{
	title:string;
	description:string;
	color:string;
	image:string;
}

interface IAboutDescription{
	text:string;
}

interface IPredmet{
	predmet: string;
	description: string;
	image:string;
}

interface IProduct{
    product: string;
    image: string;
    price: string;
    type: string;
    description: string;
    id: number;
}

interface ITicketsRoute {
	buttonText: string;
	buttonValue:string;
}

interface ISocialNetworkRoute {
	buttonText: string;
	buttonValue:string;
	buttonImage:string;
}