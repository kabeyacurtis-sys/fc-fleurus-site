import nodemailer from "nodemailer";

export async function POST(req) {
  console.log("API CONTACT APPELÉE");

  const data = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let sujet = "";
  let messageParent = "";

  if (data.type === "Affiliation") {
    sujet = "Bienvenue au FC Fleurus";

    messageParent = `
Bonjour,

Nous sommes heureux de vous compter parmi la grande famille du FC Fleurus pour la saison 2026-2027.

⚽ Reprise des entraînements

La reprise des entraînements est fixée à la semaine du 10 août 2026.

💳 Cotisation saison 2026-2027

Le montant de la cotisation annuelle est de 350 €.

Modalités de paiement :

1er acompte : 150 € à verser avant le 15 juillet 2026
Solde : 200 € à verser avant le 15 août 2026

Compte bancaire :
BE93 9640 1087 7567

Communication :
Nom + Prénom du joueur + Année de naissance

📌 Les packs d’équipement seront remis uniquement après le paiement complet de la cotisation.

📍 Lieu des entraînements et des matchs

Complexe sportif de Lambusart
Rue du Petit Try
6220 Lambusart

🗓️ Horaires des entraînements
École des jeunes
U7 : Mardi et Jeudi – 17h30 à 18h45
U8 : Mardi et Jeudi – 17h30 à 18h45
U10 : Mardi et Jeudi – 17h30 à 18h45
U12 : Mardi et Vendredi – 17h30 à 18h45
U13 : Mardi et Vendredi – 17h30 à 18h45
U14 : Mardi et Vendredi – 18h45 à 20h00
U16 : Mardi et Jeudi – 18h45 à 20h00
Équipes seniors
Réserve :
Mardi : 20h00 à 21h30
Jeudi : 19h00 à 20h30
P4 :
Mardi : 20h00 à 21h30
Jeudi : 20h00 à 21h30
🧤 Entraînement spécifique gardiens
Groupe 1 : 17h30 à 18h45
Groupe 2 : 18h45 à 20h00
🎯 Entraînement spécifique technique
Groupe 1 : 17h30 à 18h45
Groupe 2 : 18h45 à 20h00
🤝 Merci de votre confiance

Toute l'équipe du FC Fleurus se réjouit d'accompagner votre enfant tout au long de cette nouvelle saison, dans un environnement sportif, formateur et convivial.

Nous vous souhaitons une excellente saison 2026-2027 et nous avons hâte de vous retrouver sur les terrains.

Sportivement,

FC Fleurus ⚽🟡⚫
`;
  }

  if (data.type === "Stage") {
    sujet = "Confirmation d'inscription au stage";

    messageParent = `
Bonjour,

Nous avons le plaisir de vous confirmer l’inscription de votre enfant à notre stage organisé par le FC Fleurus.

🕘 Horaires du stage
De 9h00 à 15h30
👨‍👩‍👧 Garderie
Matin : de 7h30 à 9h00
Soir : de 15h30 à 17h00
🍽️ Repas

Les enfants peuvent :

apporter leur dîner,
ou commander un sandwich sur place.
💳 Paiement

Merci d'effectuer le paiement sur le compte suivant :

IBAN : BE93 9640 1087 7567

Communication :
Nom + Prénom de l'enfant + Stage (Juillet ou Août)

💰 Tarifs
100 € par enfant
90 € pour les joueurs inscrits au club
90 € pour le deuxième enfant d'une même famille
📍 Lieux des stages
Stage de Juillet

Terrain 1 du FC Fleurus
Rue de Fleurjoux 50
6220 Fleurus

Stage d'Août

Rue du Petit Try
6220 Lambusart

⚽ Informations importantes

Nous vous recommandons de prévoir :

une tenue de sport adaptée,
des chaussures de football et/ou de sport,
une gourde ou bouteille d'eau,
une tenue de rechange en cas de mauvais temps.

Nous vous remercions pour votre confiance et avons hâte d'accueillir votre enfant pour une semaine sportive, ludique et enrichissante.

À très bientôt pour faire de nos jeunes participants de véritables petits champions !

Sportivement,

L'équipe du FC Fleurus
`;
}

try {

  // Mail reçu par le club
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: "footballclubfleurus@gmail.com",
    subject: `Nouvelle demande : ${data.type}`,
    text: `
Type : ${data.type}

Nom : ${data.nom}
Prénom : ${data.prenom}
Date : ${data.date}
Email : ${data.email}
Téléphone : ${data.telephone}
Adresse : ${data.adresse}

Message :
${data.demande}
`,
  });

  // Mail automatique envoyé au parent
  if (data.type !== "Renseignement") {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: sujet,
      text: messageParent,
    });
  }

  return Response.json({
    success: true,
  });

} catch (error) {

  console.error(error);

  return Response.json(
    {
      success: false,
      error: error.message,
    },
    {
      status: 500,
    }
  );

}

}