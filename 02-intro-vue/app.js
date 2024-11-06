const originalQuotes = [
    { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
    { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
    { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
];




const {createApp, ref, computed } = Vue;


const app = createApp({

    setup(){

        const showAuthor = ref(true); //lo uso como vble reactiva para poder hacer que cambie de valor
        //ya que esta declarado como const, para usarlo tambien lo exporto en el return

        const quotes = ref(originalQuotes);
        const newMessage = ref('');
        const totalQuotes = computed (() => {
            return quotes.value.length;
        })
       

        const changeStatusAuthor = () => {
            showAuthor.value = !showAuthor.value;  //se puede hacer con false, pero para que siemrpe tome el valor inverso
            //es mas facil ponerlo como que tome su valor inverso, si coloco false no retorna
            
        }

        const addQuote = () => {
            quotes.value.unshift({ quote: newMessage.value, author: 'Mateo Cespedes'});
        
            newMessage.value = '';
        }
        

        return {
            quotes,
            showAuthor,
            changeStatusAuthor,
            addQuote,
            totalQuotes,
            newMessage,
        }
    }
});




app.mount('#myApp');

