# 📸 GUIDE D'AJOUT DES IMAGES
## Comment ajouter de belles images à votre site

---

## 🎯 OBJECTIF

Remplacer les emojis (🔧 et ⚡) par de vraies photos professionnelles de vos services.

---

## 📋 IMAGES RECOMMANDÉES

### Pour le service PLOMBERIE :
- 📸 Robinet moderne
- 📸 Salle de bain rénovée
- 📸 Installation de tuyauterie
- 📸 Chauffe-eau ou chaudière
- 📸 Vous en train de travailler

### Pour le service ÉLECTRICITÉ :
- 📸 Tableau électrique moderne
- 📸 Installation de luminaires
- 📸 Borne de recharge électrique
- 📸 Câblage professionnel
- 📸 Vous en train de travailler

---

## 🔍 OÙ TROUVER DES IMAGES ?

### Option 1 : Vos propres photos (MEILLEUR)
- Prenez des photos de vos réalisations
- Demandez la permission aux clients
- Utilisez un smartphone moderne (bonne qualité)

### Option 2 : Banques d'images gratuites
Si vous n'avez pas encore de photos, utilisez temporairement :

**Sites gratuits :**
- Unsplash : https://unsplash.com
- Pexels : https://www.pexels.com
- Pixabay : https://pixabay.com

**Recherches suggérées :**
- "plumber work" (plombier au travail)
- "plumbing installation" (installation plomberie)
- "electrician work" (électricien au travail)
- "electrical panel" (tableau électrique)
- "bathroom renovation" (rénovation salle de bain)

---

## 🎨 PRÉPARER VOS IMAGES

### 1. Dimensions recommandées
**Format paysage :** 1200 x 800 pixels (ratio 3:2)

### 2. Optimiser le poids
Les images doivent être légères pour un site rapide.

**Outils gratuits :**
- TinyPNG : https://tinypng.com (le meilleur)
- Squoosh : https://squoosh.app
- Compressor.io : https://compressor.io

**Objectif :** Moins de 300 Ko par image

### 3. Format
- **JPG** pour les photos
- **PNG** pour les logos (avec transparence)
- **WebP** pour la meilleure compression (optionnel)

---

## 📁 ORGANISATION DES FICHIERS

### Créer la structure de dossiers

```
plombier-finistere/
├── public/
│   └── images/
│       ├── plomberie.jpg
│       ├── electricite.jpg
│       ├── hero-background.jpg (optionnel)
│       └── logo.png (optionnel)
```

### Noms de fichiers recommandés
- `plomberie.jpg` - Photo service plomberie
- `electricite.jpg` - Photo service électricité
- `plomberie-2.jpg` - Photo alternative plomberie
- `electricite-2.jpg` - Photo alternative électricité

**⚠️ IMPORTANT :**
- Utilisez des noms en minuscules
- Sans espaces (utilisez des tirets)
- Sans accents ni caractères spéciaux

---

## 💻 AJOUTER LES IMAGES AU CODE

### Étape 1 : Créer le dossier
```bash
mkdir -p public/images
```

### Étape 2 : Copier vos images
Placez vos images optimisées dans `public/images/`

### Étape 3 : Modifier le code

Ouvrez le fichier `app/page.tsx` et trouvez cette section (ligne ~89) :

#### AVANT (avec emoji) :
```tsx
<div className="relative h-64 bg-gradient-to-br from-blue-500 to-blue-700">
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-white text-center">
      <div className="text-8xl mb-4">🔧</div>
      <h3 className="text-3xl font-bold">PLOMBERIE</h3>
    </div>
  </div>
</div>
```

#### APRÈS (avec image) :
```tsx
<div className="relative h-64 overflow-hidden">
  <Image 
    src="/images/plomberie.jpg" 
    alt="Services de plomberie professionnels à Commana, Finistère"
    width={800}
    height={600}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-blue-900/50 flex items-center justify-center">
    <h3 className="text-3xl font-bold text-white">PLOMBERIE</h3>
  </div>
</div>
```

### Pour l'électricité (ligne ~132) :

#### AVANT :
```tsx
<div className="relative h-64 bg-gradient-to-br from-yellow-500 to-orange-600">
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-white text-center">
      <div className="text-8xl mb-4">⚡</div>
      <h3 className="text-3xl font-bold">ÉLECTRICITÉ</h3>
    </div>
  </div>
</div>
```

#### APRÈS :
```tsx
<div className="relative h-64 overflow-hidden">
  <Image 
    src="/images/electricite.jpg" 
    alt="Services d'électricité professionnels à Commana, Finistère"
    width={800}
    height={600}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-orange-900/50 flex items-center justify-center">
    <h3 className="text-3xl font-bold text-white">ÉLECTRICITÉ</h3>
  </div>
</div>
```

---

## 🎨 CODE COMPLET OPTIMISÉ

Voici le code complet avec les images pour la section services :

```tsx
import Image from 'next/image'

// Dans la section services :
<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
  {/* Service Plomberie */}
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
    <div className="relative h-64 overflow-hidden">
      <Image 
        src="/images/plomberie.jpg" 
        alt="Services de plomberie professionnels à Commana, Finistère"
        width={800}
        height={600}
        className="w-full h-full object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end p-6">
        <h3 className="text-3xl font-bold text-white">🔧 PLOMBERIE</h3>
      </div>
    </div>
    <div className="p-6">
      {/* ... reste du contenu ... */}
    </div>
  </div>

  {/* Service Électricité */}
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
    <div className="relative h-64 overflow-hidden">
      <Image 
        src="/images/electricite.jpg" 
        alt="Services d'électricité professionnels à Commana, Finistère"
        width={800}
        height={600}
        className="w-full h-full object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 to-transparent flex items-end p-6">
        <h3 className="text-3xl font-bold text-white">⚡ ÉLECTRICITÉ</h3>
      </div>
    </div>
    <div className="p-6">
      {/* ... reste du contenu ... */}
    </div>
  </div>
</div>
```

---

## 🎯 BONNES PRATIQUES SEO POUR LES IMAGES

### 1. Texte alternatif (alt)
Décrivez précisément l'image pour le SEO et l'accessibilité :

```tsx
alt="Services de plomberie professionnels à Commana, Finistère"
```

**Bon :**
- "Plombier installant un robinet à Commana"
- "Tableau électrique moderne installé dans le Finistère"

**Mauvais :**
- "image1"
- "photo"

### 2. Nom de fichier
```
✅ plomberie-installation-commana.jpg
❌ IMG_1234.jpg
```

### 3. Attribut loading
Pour les images en bas de page :
```tsx
loading="lazy"
```

---

## 🖼️ AJOUTER UN LOGO

### Créer un fichier logo
Placez votre logo dans `public/logo.png`

### Modifier le header
Dans `app/page.tsx`, ligne ~10 :

```tsx
<nav className="container mx-auto px-4 py-4 flex justify-between items-center">
  <div className="flex items-center gap-3">
    <Image 
      src="/logo.png" 
      alt="Logo Plomberie Électricité Finistère"
      width={50}
      height={50}
    />
    <div className="text-2xl font-bold text-primary">
      Plomberie Électricité 29
    </div>
  </div>
  {/* ... */}
</nav>
```

---

## 🎨 AMÉLIORER VISUELLEMENT

### Ajouter un effet de survol sur les images

```tsx
<div className="relative h-64 overflow-hidden group">
  <Image 
    src="/images/plomberie.jpg" 
    alt="Services de plomberie à Commana"
    width={800}
    height={600}
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
  />
  {/* ... */}
</div>
```

### Ajouter un filtre coloré

```tsx
<div className="absolute inset-0 bg-blue-600/40"></div>
```

---

## ✅ CHECKLIST AVANT DE PUBLIER

- [ ] Images optimisées (< 300 Ko chacune)
- [ ] Format correct (JPG ou PNG)
- [ ] Dimensions correctes (1200x800px)
- [ ] Images dans `public/images/`
- [ ] Noms de fichiers corrects (sans espaces)
- [ ] Code modifié avec les bons chemins
- [ ] Texte alternatif descriptif (alt)
- [ ] Test en local (`npm run dev`)
- [ ] Vérification sur mobile

---

## 🔄 GALERIE DE RÉALISATIONS (BONUS)

Vous pouvez créer une page galerie pour montrer vos travaux.

### Créer la page
Créez `app/galerie/page.tsx` :

```tsx
import Image from 'next/image'

export default function Galerie() {
  const realisations = [
    { src: '/images/realisation-1.jpg', titre: 'Rénovation salle de bain' },
    { src: '/images/realisation-2.jpg', titre: 'Installation électrique' },
    { src: '/images/realisation-3.jpg', titre: 'Plomberie cuisine' },
    // Ajoutez plus de réalisations
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Nos Réalisations</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {realisations.map((real, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-lg">
            <Image 
              src={real.src}
              alt={real.titre}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold">{real.titre}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
```

---

## 🆘 PROBLÈMES COURANTS

### Les images ne s'affichent pas
1. Vérifiez le chemin : `/images/` et non `images/`
2. Vérifiez l'orthographe du nom de fichier
3. Redémarrez le serveur : `npm run dev`

### Images floues
1. Utilisez des images plus grandes
2. Ajoutez `quality={90}` au composant Image

### Images trop lourdes
1. Compressez avec TinyPNG
2. Redimensionnez à 1200x800px max

---

## 📚 RESSOURCES UTILES

- Next.js Image Component : https://nextjs.org/docs/api-reference/next/image
- TinyPNG : https://tinypng.com
- Unsplash : https://unsplash.com
- Guide SEO Images Google : https://developers.google.com/search/docs/appearance/google-images

---

**Bonne personnalisation ! 📸**
