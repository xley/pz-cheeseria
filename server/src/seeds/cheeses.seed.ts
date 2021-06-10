import { Cheese } from "../entities";

const cheese1 = new Cheese();
cheese1.title = 'ABBAYE DE BELLOC';
cheese1.price = 109.95;
cheese1.colour = 'yellow';
cheese1.description = "Abbaye de Belloc is a flat wheel-shaped traditional, farmhouse, unpasteurised, semi-hard cheese made from sheep's milk. It has a natural, crusty, brownish rind with patches of red, orange and yellow. The rind is marked with tiny craters.";
cheese1.category = "creamy, dense and firm";
cheese1.image = "https://www.cheese.com/media/img/cheese/Abbaye-de-Belloc.jpg";

const cheese2 = new Cheese();
cheese2.title = "ABBAYE DU MONT DES CATS";
cheese2.price = 29.21;
cheese2.colour = "pale yellow";
cheese2.description = "The Abbaye du Mont des Cats cheese is made by monks in a monastery of the same name in the town of Godewaersvelde, in Northern France. Cow's milk from local farms is used and the milk is gently pasteurised for cheese production. The maturation process takes about 4 to 5 weeks";
cheese2.category = "semi-soft, artisan, brined";
cheese2.image = "https://www.cheese.com/media/img/cheese/Mont_des_Cats_kaas.jpg";

const cheese3 = new Cheese();
cheese3.title = "ADELOST";
cheese3.price = 367.55;
cheese3.colour = "blue";
cheese3.description = "Adelost is a Swedish blue cheese made from cow's milk. The blue-grey veins running throughout are a distinctive feature of the cheese. It has a sharp, salty and tangy flavour. The ripening process is for two to three months. The cheese comes in a drum shape with a rind of pale cream, which is lightly dotted with moulds.";
cheese3.category = "semi-soft, blue-veined";
cheese3.image = "https://www.cheese.com/media/img/cheese/Adelost_QnxYLx6.jpg";

const cheese4 = new Cheese();
cheese4.title = "FETA";
cheese4.price = 78.65;
cheese4.colour = "white";
cheese4.description = "Feta is undoubtedly one of the most famous Greek cheeses. In fact, Feta occupies 70% stake in Greek cheese consumption. To create traditional feta, 30 percent of goat's milk is mixed with sheep's milk of animals grazing on pastures in the specific appellation of origin regions.";
cheese4.category = "soft, brined";
cheese4.image = "https://www.cheese.com/media/img/cheese/504_feta.jpg";

const cheese5 = new Cheese();
cheese5.title = "JARLSBERG";
cheese5.price = 88.15;
cheese5.colour = "yellow";
cheese5.description = "Jarlsberg is a mild, semi-soft cow’s milk cheese of Norwegian origin. Created by Anders Larsen Bakke, it resembles a Swiss Emmental with distinctive, open and irregular ‘eyes’. Many a times Jarlsberg is marketed as a Swiss cheese because of its characteristics, though it tends to be sweeter and stronger than Emmentaler.";
cheese5.category = "open, smooth and supple";
cheese5.image = "https://www.cheese.com/media/img/cheese/Jarlsberg_in_Wholefoods_2.jpg";

const cheese6 = new Cheese();
cheese6.title = "MAASDAM";
cheese6.price = 140;
cheese6.colour = "pale yellow";
cheese6.description = "Maasdam is a traditional, semi-hard Dutch cheese made from cow’s milk. The most characteristic feature is its ‘eyes’ (holes) that make up most of the cheese. The cheese was created in the early 1990s as an alternative to more expensive Swiss Emmental cheese. It is a high-fat cheese with a minimum of 45% fat. Although similar to Emmental, the moisture content in Maasdam is more, making it suppler.";
cheese6.category = "creamy, open and supple";
cheese6.image = "https://www.cheese.com/media/img/cheese/wiki/maasdam.jpg";

const cheese7 = new Cheese();
cheese7.title = "ROYALP TILSIT";
cheese7.price = 625.57;
cheese7.colour = "pale yellow";
cheese7.description = "oyalp Tilsit or Swiss Tilsit is a light yellow semi-hard smear-ripened cheese made from unpasteurised/pasteurised cow milk. The pasteurised version is mild in flavour whereas the one made from fresh, unpasteurised milk is more strongly flavoured (called Farmhouse Tilsit). It is aged for about 5 months, which makes it a very strong smelling cheese comparable to a Limburger.";
cheese7.category = "semi-hard, smear-ripened";
cheese7.image = "https://www.cheese.com/media/img/cheese/Tilsit_cheese_1.jpg";

const cheese8 = new Cheese();
cheese8.title = "SAINT ALBRAY";
cheese8.price = 860.62;
cheese8.colour = "ivory";
cheese8.description = "Saint Albray is a flower-shaped cheese that comes from the Aquitaine region of France. Made with pasteurised cow's milk and ripened for 2 weeks, it slices off skilfully with each half-pound cut looking like a \"petal\". When each petal comes together around a disk, they form a hollow centre similar to a flower.";
cheese8.category = "soft, soft-ripened";
cheese8.image = "https://www.cheese.com/media/img/cheese/12-saint-albray-shutterstock_1222710106.jpg";

const cheeses = [cheese1, cheese2, cheese3, cheese4, cheese5, cheese6, cheese7, cheese8];

export { cheeses };