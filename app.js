const dum = [
    'Cookie soufflé cake tart gummi bears wafer. Brownie candy canes candy cotton candy tootsie roll macaroon danish danish. Macaroon topping lemon drops croissant biscuit. Lemon drops candy biscuit gummi bears sweet donut sweet. Bear claw sweet pie ice cream chupa chups dragée biscuit topping. Fruitcake pastry pastry chocolate cake fruitcake tootsie roll cake brownie. Bear claw sugar plum gummies sweet caramels cheesecake tiramisu.',
    'Cake candy cotton candy sesame snaps cake liquorice cupcake fruitcake. Lemon drops chocolate dragée apple pie pudding jelly beans wafer cake jujubes. Topping jelly-o icing halvah lemon drops. Apple pie gummi bears pastry donut pie tiramisu tart jelly-o. Fruitcake muffin powder fruitcake croissant caramels powder. Dragée croissant cupcake cake marshmallow lollipop. Sweet tootsie roll tootsie roll halvah cake muffin bonbon. Lemon drops liquorice cake macaroon biscuit topping lollipop caramels jelly-o','Pie macaroon candy canes gingerbread lemon drops oat cake dessert topping. Macaroon candy canes gingerbread toffee bear claw halvah jelly tiramisu biscuit. Halvah lollipop croissant sweet roll gummi bears. Bear claw icing cotton candy chupa chups tart oat cake halvah ice cream. Chocolate gummi bears marshmallow brownie topping. Brownie powder pudding toffee croissant bear claw gummi bears wafer powder.','Chupa chups danish jelly cheesecake ice cream wafer ice cream tootsie roll donut. Marzipan liquorice macaroon marshmallow croissant shortbread tootsie roll. Gummies oat cake cheesecake toffee gummi bears oat cake toffee pastry. Icing chocolate cake brownie sesame snaps icing icing jelly beans jelly beans chocolate. Brownie chocolate muffin apple pie lemon drops chocolate bar cookie. Shortbread brownie icing brownie sugar plum cupcake caramels jujubes marshmallow. Liquorice marzipan croissant sugar plum soufflé gummies powder. Tart marzipan ice cream pudding candy sweet roll biscuit. Halvah marzipan danish candy macaroon marshmallow topping. Tart jelly danish brownie pastry lemon drops pudding.','Pie topping fruitcake tootsie roll toffee pastry donut croissant. Jelly-o tart cotton candy donut bear claw. Chocolate bar cheesecake apple pie jelly-o jelly beans liquorice jujubes. Lollipop marshmallow macaroon jelly chocolate cookie icing bonbon jelly. Ice cream shortbread toffee jelly beans jujubes cheesecake gummies. Cheesecake tootsie roll marshmallow powder',
    'Bear claw shortbread lemon drops tiramisu pastry macaroon. Oat cake cake cheesecake cake tiramisu bear claw. Jelly-o icing topping cake soufflé jelly. Gingerbread pastry pastry tart jelly. Bonbon danish dessert tiramisu jelly halvah. Bear claw liquorice tart sweet oat cake chocolate muffin candy canes tart',
    'andy tootsie roll. Tootsie roll apple pie cotton candy cotton candy jelly beans. Macaroon sugar plum macaroon candy canes dessert lemon drops wafer. Caramels sweet roll donut biscuit cotton candy. Chocolate bar gummies liquorice muffin carrot cake jujubes candy canes cake shortbread. Donut donut bear claw soufflé tootsie ',
    'tiramisu marzipan jujubes. Jujubes cake macaroon marshmallow chocolate cake. Fruitcake jelly-o jelly-o bonbon ice cream cake biscuit. Croissant topping lollipop gummi bears muffin bonbon pie. Toffee toffee brownie pudding dragée tart. Ice cream jujubes bonbon chocolate cake tootsie roll. Bonbon pastry lemon drops lemon drops danish candy caramels. Lemon drops cake sesame snaps tiramisu sweet icing tiramisu. Macaroon lollipop jelly pastry icing gummi bears chocolate bar wafer chupa chups. Oat cake jelly beans candy canes gingerbread cupcake cake macaroon dra',
    'Danish croissant bear claw caramels topping. Gummies powder biscuit lollipop marzipan sugar plum. Bonbon soufflé dragée chupa chups soufflé oat cake chupa chups cotton candy. Tiramisu halvah apple pie marzipan carrot cake cookie. Chocolate bar sugar plum chocolate bar marshmallow chupa chups. Sugar plum sweet roll gummi bears chocolate bar danish. Bonbon sesame snaps bonbon ',
    'Oat cake muffin halvah candy dessert chocolate chocolate cake pie. Cheesecake halvah tiramisu marzipan jujubes. Jujubes cake macaroon marshmallow chocolate cake. Fruitcake jelly-o jelly-o bonbon ice cream cake biscuit. Croissant topping lollipop gummi bears muffin bonbon pie. Toffee toffee brownie pudding dragée tart. Ice cream jujubes bonbon chocolate cake tootsie roll. Bonbon pastry lemon drops lemon drops danish candy caramels. Lemon drops cake sesa',
    'sugar plum. Bonbon soufflé dragée chupa chups soufflé oat cake chupa chups cotton candy. Tiramisu halvah apple pie marzipan carrot cake cookie. Chocolate bar sugar plum chocolate bar marshmallow chupa chups. Sugar plum sweet roll gummi bears chocolate bar danish. Bonbon sesame snaps bonbon caramels sugar plum chocolate cake carrot cake. Cake pie chocolate cookie cake chupa chups sugar plum marshmallow bear claw. Danish tiramisu cheesecake soufflé toffee shortbread tootsie roll. Sesame snaps dessert gingerbread jelly-o dragée pastry bonbon. Lemon drop',
    'cake fruitcake jelly sweet. Macaroon tart tart cotton candy pudding brownie croissant halvah. Sweet tiramisu tiramisu shortbread cotton candy tootsie roll pie chocolate cake cookie. Jelly toffee chocolate cake tart sweet dessert ice cream tiramisu sweet. Biscuit cheesecake tiramisu gummies chocolate cake oat cake caramels halvah. Caramels liquorice soufflé cheesecake gingerbread liquorice lemon drops apple pie. Halvah topping chocolate cake pastry bonbon shortbread gingerbread.',
    'Dessert cheesecake marzipan marshmallow liquorice cookie bonbon. Muffin gingerbread cake croissant macaroon. Wafer sugar plum brownie sweet chocolate donut apple pie shortbread sweet roll. Cotton candy pudding cupcake muffin marshmallow bonbon dragée sweet roll. Shortbread cake pastry cookie dragée liquorice oat cake cupcake. Shortbread jelly beans sweet roll gummi bears pudding wafer tiramisu. Sesame snaps fruitcake donut jelly beans caramels gummies. Toffee pie oat cake chupa chups cake chocolate pastry jujubes. Chocolate chocolate bar bear claw jujubes fruitcake macaroon lollipop lollipop.'
];

//Adding elements
const form = document.querySelector('#form');
const amount = document.querySelector('#amount');
const result = document.querySelector('#result');

//Adding Lisnter

form.addEventListener('submit', function(z){
    z.preventDefault();
    
    const value = parseInt(amount.value);
    // Random Number
    let random = Math.floor(Math.random()*dum.length);
    //negative, for empty, greater than 9
    if(isNaN(value) || value <= 0 || value > 15){
        result.innerHTML = `<p>${dum[random]}</p>`;
    }
    else{
        const kuvArray = dum.slice(0, value);
        const finalArray = kuvArray.map(function(Arrays)
        {
            return `<p>${Arrays}</p>`;
        }).join('');
        
        result.innerHTML = finalArray;
    }
});