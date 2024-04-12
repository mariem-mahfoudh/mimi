document.getElementById('luckButton').addEventListener('click', function() {
    const luckMessages = [
        "Tu es mon rayon de soleil.", "Tu es belle aujourd'hui.", "Tu illumines ma vie.", 
        "Je chéris chaque moment avec toi.", "Mon cœur bat pour toi.", "Tu es mon rêve réalisé.",
        "Je suis mieux grâce à toi.", "Ton sourire est mon refuge.", "Tu es ma muse inspirante.",
        "Ta gentillesse me submerge.", "Je t'admire profondément.", "Ton rire est ma mélodie préférée.",
        "Tu es mon âme sœur.", "Chaque jour, je t'aime plus.", "Tu es l'étoile de mes nuits.",
        "Tu rends tout possible.", "Je suis captivée par ton amour.", "Tu es l'essence de ma joie.",
        "Avec toi, chaque jour est une aventure.", "Ta force est mon inspiration.", 
        "Je me perds dans tes yeux.", "Tu es mon refuge sûr.", "Ta présence apaise mon âme.",
        "Tu es mon guide lumineux.", "Je te veux toujours à mes côtés.", "Tu es le cadeau de ma vie.",
        "Tes mots me nourrissent.", "Je t'admire plus que les mots ne peuvent le dire.",
        "Ta passion enflamme mon cœur.", "Je t'aimerai éternellement.",
        "Je suis émerveillée par ton esprit.", "Ton amour m'élève.",
        "Tu es le calme dans ma tempête.", "Ta douceur me touche.", 
        "Je suis dévouée à ton bonheur.", "Je trouve la paix dans ton étreinte.",
        "Tu es la raison de mon sourire.", "Je t'embrasse avec mon âme.", "Ton amour est mon trésor.",
        "Chaque moment sans toi est un moment perdu.", "Tu es ma meilleure amie.",
        "Je suis éblouie par ta beauté.", "Tu es le rythme de mon cœur.", 
        "Ta présence est mon cadeau quotidien.", "I'm grateful for your love.",
        "Tu es mon soutien constant.", "Je trouve mon courage en toi.", "Tu es l'amour de ma vie.",
        "Tu es mon ancre.", "Chaque jour avec toi est précieux.", "I am blessed to be with you.",
        "Je suis captivée par ton charme.", "Tu es mon abri contre l'orage.",
        "Je suis béni de te connaître.", 
        "Tu es irremplaçable.", "Je me sens vivante grâce à toi.",
        "Ton amour est ma force.", "Tu es ma femme pour toujours.", 
        "Je suis passionné par tout ce que tu es.", "Tu es le centre de mon univers.", 
        "Je suis amoureuse de chaque partie de toi.", 
        "Tu es la mélodie de mon âme.", "Je suis infiniment amoureuse de toi.", 
        "Tu es ma confidente.", "Tu es mon évasion.", "Ta beauté est éblouissante.", 
        "Je suis heureuse que tu sois dans ma vie.", "Tu es mon plus grand amour.", 
        "Ta présence est ma joie.", "Tu es mon espoir.", 
        "Je me sens complète avec toi.", "Tu es mon tout.", "Je suis fasciné par toi.", 
        "Ton amour est mon guide.", "Tu es la paix de mon âme.", "Tu es la chaleur de mon cœur.", 
        "Tu es mon équilibre.", "Je suis ému par ton amour.", "Tu es mon inspiration quotidienne.", 
        "Je suis capturé par ton esprit.", 
        "Tu es mon souffle.", "Je suis comblé par ton amour.", "Tu es mon avenir.", 
        "Je t'aime sans fin.", "Tu es ma complice.", "Je suis attirée par toi chaque jour.",
        "Tu es ma lumière dans l'obscurité.", "Tu es mon éternel amour.", 
        "Tu es mon bonheur.", "Je suis connectée à toi.", "Tu es tout ce dont j'ai besoin."
    ];
    const randomIndex = Math.floor(Math.random() * luckMessages.length);
    document.getElementById('messageArea').innerText = luckMessages[randomIndex];
});

document.getElementById('loveButton').addEventListener('click', function() {
    const loveMessages = [
        "Je t'aime sans savoir comment, ni quand, ni d'où, je t'aime directement sans problèmes ni orgueil : ainsi je t'aime parce que je ne sais pas aimer autrement.",
        "I carry your heart with me(I carry it in my heart) I am never without it(anywhere I go you go,my dear;",
        "Tu es la première fougère sur un désert que j’ai vu.",
        "Et je pensais à toi, et je pensais à toi!",
        "Notre amour est établi comme le céleri-rave Nul ne sait que faire avec Mais c’est indispensable.",
        "Personne ne m’a jamais compris comme toi.",
        "Je suis devenue amoureuse de ta grandeur.",
        "L’amour c’est quand on rencontre quelqu’un qui vous donne de vos nouvelles.",
        "You are my sympathy–my better self–my good angel.",
        "I shut my eyes and all the world drops dead; I lift my lids and all is born again. (I think I made you up inside my head.)",
        "Whatever happens with us, your body will haunt mine—tender, delicate your lovemaking..."
    ];
    const randomIndex = Math.floor(Math.random() * loveMessages.length);
    document.getElementById('messageArea').innerText = loveMessages[randomIndex];
});
