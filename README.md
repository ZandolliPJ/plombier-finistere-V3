# 🚀 Site Plombier Électricien - Commana, Finistère

Site Next.js professionnel optimisé pour le référencement local (SEO) et Google Maps.

---

## 📋 CE QUI EST INCLUS

✅ Site web complet avec design professionnel  
✅ 2 services mis en avant : Plomberie + Électricité  
✅ Optimisation SEO locale pour le Finistère  
✅ Schema.org pour Google Maps (coordonnées Commana)  
✅ robots.txt et sitemap.xml  
✅ Design responsive (mobile, tablette, desktop)  
✅ Boutons d'appel direct  

---

## 🛠️ INSTALLATION (ÉTAPE PAR ÉTAPE)

### Prérequis
- Node.js installé (télécharger sur https://nodejs.org)
- Un éditeur de code (VS Code recommandé)

### Étape 1 : Télécharger le projet
Téléchargez tous les fichiers dans un dossier sur votre ordinateur.

### Étape 2 : Ouvrir le terminal
- **Windows** : Ouvrez PowerShell ou Command Prompt
- **Mac** : Ouvrez Terminal
- Naviguez vers le dossier du projet :
```bash
cd chemin/vers/plombier-finistere
```

### Étape 3 : Installer les dépendances
```bash
npm install
```
⏳ Cela prendra 2-3 minutes la première fois.

### Étape 4 : Lancer le site en local
```bash
npm run dev
```

🎉 Votre site est maintenant accessible sur : **http://localhost:3000**

---

## ✏️ PERSONNALISATION OBLIGATOIRE

### 1. Coordonnées de contact
Ouvrez le fichier `app/page.tsx` et modifiez :
- `tel:+33200000000` → votre vrai numéro
- `contact@votre-site.com` → votre vraie adresse email
- L'adresse physique dans la section Contact

### 2. Métadonnées Schema.org
Ouvrez `app/layout.tsx` et modifiez :
```javascript
"telephone": "+33-2-XX-XX-XX-XX",  // Votre numéro
"email": "contact@votre-site.com",  // Votre email
"streetAddress": "Votre adresse",   // Votre adresse complète
"url": "https://votre-site.com",    // Votre URL finale
```

### 3. Google Search Console
Dans `app/layout.tsx`, remplacez :
```javascript
verification: {
  google: 'votre-code-verification-google',
}
```

### 4. Sitemap
Dans `app/sitemap.ts`, remplacez :
```javascript
const baseUrl = 'https://votre-site.com'  // Votre vraie URL
```

### 5. Robots.txt
Dans `public/robots.txt`, remplacez :
```
Sitemap: https://votre-site.com/sitemap.xml
```

---

## 🚀 DÉPLOIEMENT SUR INTERNET (GRATUIT)

### Option 1 : Vercel (Recommandé - 100% Gratuit)

1. **Créer un compte Vercel**
   - Allez sur https://vercel.com
   - Inscrivez-vous avec GitHub, GitLab ou email

2. **Installer Vercel CLI**
```bash
npm install -g vercel
```

3. **Se connecter**
```bash
vercel login
```

4. **Déployer**
```bash
vercel
```
   Suivez les instructions à l'écran. Vercel vous donnera une URL gratuite.

5. **Déploiement en production**
```bash
vercel --prod
```

**Votre site sera accessible sur une URL du type :**  
`https://plombier-finistere.vercel.app`

### Option 2 : Netlify

1. Allez sur https://netlify.com
2. Créez un compte
3. Glissez-déposez votre dossier `plombier-finistere`
4. Netlify déploie automatiquement votre site

---

## 📱 AJOUTER DES IMAGES POUR LES SERVICES

### Images recommandées :
- **Plomberie** : photo de robinet, tuyauterie, salle de bain
- **Électricité** : tableau électrique, ampoules, installation

### Étape 1 : Préparer les images
- Format : JPG ou PNG
- Taille recommandée : 1200x800 pixels
- Poids : moins de 500 Ko (utilisez https://tinypng.com pour compresser)

### Étape 2 : Ajouter les images
1. Créez un dossier `public/images/`
2. Ajoutez vos images :
   - `plomberie.jpg`
   - `electricite.jpg`

### Étape 3 : Modifier le code
Dans `app/page.tsx`, remplacez les sections avec emoji par :

```tsx
<Image 
  src="/images/plomberie.jpg" 
  alt="Services de plomberie à Commana"
  width={800}
  height={600}
  className="w-full h-64 object-cover"
/>
```

---

## 🗺️ OPTIMISATION GOOGLE MAPS

### 1. Google My Business
1. Créez un compte sur https://business.google.com
2. Ajoutez votre entreprise avec :
   - Nom : "Plomberie Électricité Finistère"
   - Adresse : Votre adresse à Commana
   - Coordonnées : 48.413057, -3.955789
   - Catégories : Plombier, Électricien
   - Téléphone et site web

### 2. Vérification
Google vous enverra une carte postale pour vérifier votre adresse.

### 3. Optimisation
- Ajoutez des photos de vos interventions
- Demandez des avis à vos clients
- Publiez régulièrement des actualités

---

## 📊 RÉFÉRENCEMENT LOCAL (SEO)

### Déjà inclus dans le site :
✅ Balises meta optimisées pour le Finistère  
✅ Schema.org avec géolocalisation Commana  
✅ Mots-clés locaux (Commana, Finistère, 29450)  
✅ Structure HTML sémantique  
✅ Sitemap.xml  
✅ Robots.txt  

### À faire après le déploiement :

1. **Google Search Console**
   - Inscrivez-vous sur https://search.google.com/search-console
   - Ajoutez votre site
   - Soumettez votre sitemap

2. **Annuaires locaux**
   Inscrivez-vous sur :
   - Pages Jaunes
   - 118000.fr
   - Yelp
   - Mappy

3. **Contenu local**
   Ajoutez régulièrement du contenu mentionnant :
   - Commana
   - Finistère
   - Villes environnantes (Morlaix, Landivisiau, etc.)

---

## 🎨 PERSONNALISATION DU DESIGN

### Modifier les couleurs
Dans `tailwind.config.js` :
```javascript
colors: {
  primary: '#2563eb',    // Bleu principal
  secondary: '#1e40af',  // Bleu secondaire
},
```

### Modifier les polices
Dans `app/layout.tsx`, ajoutez :
```javascript
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
```

---

## 🐛 DÉPANNAGE

### Le site ne démarre pas
```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules
npm install
npm run dev
```

### Erreur de port déjà utilisé
```bash
# Utiliser un autre port
npm run dev -- -p 3001
```

### Les images ne s'affichent pas
Vérifiez que les images sont bien dans `public/images/`

---

## 📞 PROCHAINES ÉTAPES

1. ✅ Personnalisez tous les textes et coordonnées
2. ✅ Ajoutez vos vraies photos
3. ✅ Déployez sur Vercel
4. ✅ Créez votre Google My Business
5. ✅ Inscrivez-vous sur Google Search Console
6. ✅ Partagez votre site sur les réseaux sociaux
7. ✅ Demandez des avis à vos clients

---

## 💡 AMÉLIORATIONS FUTURES

- [ ] Formulaire de contact avec envoi d'email
- [ ] Blog pour articles SEO
- [ ] Galerie de réalisations
- [ ] Système de prise de rendez-vous en ligne
- [ ] Multilingue (breton/français)

---

## 📚 RESSOURCES UTILES

- Next.js Documentation : https://nextjs.org/docs
- Tailwind CSS : https://tailwindcss.com
- Vercel Deployment : https://vercel.com/docs
- Google My Business : https://business.google.com
- Google Search Console : https://search.google.com/search-console

---

## 🆘 BESOIN D'AIDE ?

- Documentation Next.js : https://nextjs.org/docs
- Forum Vercel : https://github.com/vercel/next.js/discussions

---

**Bon courage avec votre site ! 🚀**
