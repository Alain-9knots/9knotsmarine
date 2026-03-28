/* ═══════════════════════════════════════════════════════════
   NINE KNOTS MARINE — main.js
   Language switching · Scroll animations · Navigation · Forms
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────────────────────
   1. TRANSLATIONS
───────────────────────────────────────────────────────── */
const translations = {

  en: {
    /* Navigation */
    'nav.logo':        'NINE KNOTS',
    'nav.project':    'Project',
    'nav.yacht':      'The Yacht',
    'nav.design':     'Design',
    'nav.innovation': 'Innovation',
    'nav.gallery':    'Gallery',
    'nav.acquire':    'Acquire',
    'nav.contact':    'Contact',

    'imageband.quote': 'The sea is better at 9 knots.',

    /* Hero */
    'hero.eyebrow':      'Long-Range Electric Trawler',
    'hero.headline':     'Crafted for Those\nWho Cruise Beyond',
    'hero.subheadline':  'The 9K42 is a compact, efficient electric trawler — 12.8 m of considered design, built for offshore passages at 7 knots with near-zero fuel consumption.',
    'hero.cta1':         'Discover the 9K42',
    'hero.cta2':         'Register Interest',
    'hero.stat1':        'Overall Length',
    'hero.stat2':        'Battery Pack',
    'hero.stat3':        'Hulls — First Series',

    /* Project */
    'project.label':   'The Project',
    'project.title':   'A New Vision of\nBlue-Water Cruising',
    'project.p1':      'Nine Knots Marine was born from years of offshore experience and a clear conviction: the perfect ocean passage is one where the yacht disappears into the background, and the sea takes centre stage.',
    'project.p2':      'We questioned every convention. We studied what breaks, what wears, what fatigues crews on long passages — and what, by contrast, inspires confidence and peace of mind. Then we designed a motor yacht that answers those questions honestly.',
    'project.p3':      'Not a performance speedboat. Not a floating apartment. A proper offshore motor yacht: safe, capable, autonomous — and deeply satisfying to live aboard for weeks at a time.',
    'project.quote':   '"The sea demands honesty from a yacht. We designed one that can answer."',
    'project.origin1': 'Founded on deep offshore cruising experience',
    'project.origin2': 'Designed in collaboration with veteran blue-water cruisers',
    'project.origin3': 'Built in Northern Europe, to the highest structural standards',

    /* Yacht */
    'yacht.label':          'The Yacht',
    'yacht.title':          'Designed for Efficient Offshore Cruising',
    'yacht.intro':          'Twelve point eight metres of refined design. A displacement hull conceived for low energy consumption, steady progress at 7 knots, and genuine energy independence offshore.',
    'yacht.spec1.label':    'Overall Length',
    'yacht.spec1.detail':   'LWL ~12 m',
    'yacht.spec2.label':    'Beam',
    'yacht.spec2.detail':   'Displacement hull, efficiency-optimised',
    'yacht.spec3.label':    'Displacement',
    'yacht.spec3.detail':   'Light offshore E-Trawler',
    'yacht.spec4.label':    'Battery Pack',
    'yacht.spec4.detail':   '80–100 kWh lithium iron phosphate, 96V DC',
    'yacht.spec5.label':    'Electric Drive',
    'yacht.spec5.detail':   'Silent twin-motor propulsion',
    'yacht.spec6.label':    'Cruise Speed',
    'yacht.spec6.detail':   'Efficiency sweet-spot at 7 knots',
    'yacht.note':           'Composite sandwich construction with foam core. Bilge keels / passive stabilising fins available for offshore comfort. ISO Category A/B depending on final specification and loading.',

    /* Qualities */
    'qualities.label':      'Core Qualities',
    'qualities.title':      'What We Built For',
    'qualities.q1.title':   'Offshore Safety',
    'qualities.q1.text':    'A double-skinned composite hull built to ISO Category A — ocean. Redundant steering, self-draining cockpit, structural integrity designed for survival conditions.',
    'qualities.q2.title':   'True Autonomy',
    'qualities.q2.text':    'Months at anchor without a marina. Solar panels, a 160 kWh battery pack, and the range extender provide complete energy independence. The 9K42 sustains itself so you can focus on the journey.',
    'qualities.q3.title':   'Seakeeping',
    'qualities.q3.text':    'A displacement hull designed for steady, comfortable progress in all sea states. Moderate speed, a deep forefoot, and generous initial stability translate into a calm, predictable motion at sea.',
    'qualities.q4.title':   'Comfort Aboard',
    'qualities.q4.text':    'Live-aboard quality without compromise. Insulated to Scandinavian standards, near-silent under electric power, ergonomically considered. A space that feels like home after thirty days at sea.',
    'qualities.q5.title':   'Considered Simplicity',
    'qualities.q5.text':    'Every system selected for reliability, repairability, and ease of use. Nothing superfluous. The result is a motor yacht that two people can operate confidently, anywhere in the world.',
    'qualities.q6.title':   'Craftsmanship',
    'qualities.q6.text':    'European boatbuilding tradition applied to every surface, joint, and fitting. Premium teak, stainless, and composites, finished with the care that only a limited series allows.',

    /* Philosophy */
    'philosophy.label':     'Design Philosophy',
    'philosophy.title':     'Form Follows\nthe Sea',
    'philosophy.lead':      'We took inspiration from the Scandinavian design tradition: that beauty is a consequence of honesty, not ornament.',
    'philosophy.p1':        'Every line of the 9K42\'s interior was drawn for a purpose — the angle of the navigation station, the height of the companionway, the depth of the cockpit. Where other yachts layer on aesthetics, we stripped back to structure. The result is an interior that feels serene rather than styled.',
    'philosophy.p2':        'On deck, a flush, uncluttered layout allows confident movement in any conditions. The helm offers full 360° visibility, with all instruments close at hand. The cockpit is sheltered, generous, and sized for long offshore passages.',
    'philosophy.p3':        'The colour of oiled oak. The weight of a stainless fitting. The silence of an electric drivetrain at cruising speed. These details are not decorative. They are the measure of a serious motor yacht.',
    'philosophy.signature': '— The Nine Knots Design Studio, Gothenburg',

    /* For Whom */
    'forwhom.label':    'For Whom',
    'forwhom.title':    'For the Captain Who Has Already Crossed Oceans',
    'forwhom.p1':       'You have accumulated miles and wisdom offshore. You know the difference between a yacht that looks capable and one that is. You have lived through the compromises of previous boats and have a clear picture of what you would do differently.',
    'forwhom.p2':       'The 9K42 is for the owner who intends to use their yacht — not to keep it on a pontoon and charter it out. For the couple who want to cross the Pacific without a professional crew. For the experienced captain who plans a circumnavigation and expects the boat to be ready before they are.',
    'forwhom.profile1': 'The transatlantic couple planning extended bluewater passages',
    'forwhom.profile2': 'The experienced solo or shorthanded offshore captain',
    'forwhom.profile3': 'The owner seeking a lasting, considered investment in serious offshore cruising',

    /* Innovation */
    'innovation.label':    'Innovation & Energy',
    'innovation.title':    'Technology in\nthe Service of Independence',
    'innovation.intro':    'Nine Knots Marine incorporates advanced systems with one guiding principle: they should make your life at sea quieter, safer, and more self-sufficient — not more complicated.',
    'innovation.i1.title': 'Hybrid Propulsion',
    'innovation.i1.text':  'Twin 25 kW electric motors on a 96V DC bus, providing redundancy and precise manoeuvring. A 7.5–9 kW diesel generator acts as a considered range extender — not a primary drive, but a reliable backup that extends offshore autonomy without complexity.',
    'innovation.i2.title': 'Energy Independence',
    'innovation.i2.text':  'Significant solar integration paired with a Victron architecture and MPPT charge controllers. Sized for partial recharge from solar alone, hotel loads at anchor, and reduced generator hours. In sunny latitudes, months of autonomy without running the engine.',
    'innovation.i3.title': 'Watermaker System',
    'innovation.i3.text':  'A 240 L/h reverse-osmosis watermaker, backed by 1,800 L of stainless tank capacity. Fresh water independence, anywhere. A secondary manually-operated emergency unit is fitted as standard.',
    'innovation.i4.title': 'Navigation & Safety Systems',
    'innovation.i4.text':  'Integrated Furuno radar, AIS, and chart plotter. Iridium satellite communication. EPIRB and life raft sized for the crew. All critical systems duplicated with analogue fallback. The electronics serve you — not the reverse.',

    /* Gallery */
    'gallery.label': 'Gallery',
    'gallery.title': 'Nine Knots Marine at Sea',
    'gallery.cap1':  'Arctic passage, calm fjord waters',
    'gallery.cap2':  'Underway, Mediterranean coast',
    'gallery.cap3':  'At anchor, French Polynesia',
    'gallery.cap4':  'Aerial view, Greek islands',
    'gallery.cap5':  'At anchor, Corsica',
    'gallery.cap6':  'Terrace deck, evening light',
    'gallery.cap7':  'Open sea passage',
    'gallery.cap8':  'Hull at anchor, clear water',
    'gallery.exterior.title': 'Exterior',
    'gallery.interior.title': 'Interior Design',
    'gallery.int1':  'Main salon & helm station',
    'gallery.int2':  'Galley & dining',
    'gallery.int3':  'Master cabin',

    /* Acquisition */
    'acq.label':         'Acquisition',
    'acq.title':         'Join the First Series',
    'acq.intro':         'The initial production run is limited to twelve hulls. If the 9K42 corresponds to your vision of offshore cruising, we invite you to register your interest. A member of our team will contact you personally to discuss your project.',
    'acq.form.name':     'Full Name',
    'acq.form.email':    'Email Address',
    'acq.form.country':  'Country',
    'acq.form.background': 'Cruising Background',
    'acq.form.bg0':      'Please select…',
    'acq.form.bg1':      'Coastal & inshore cruising',
    'acq.form.bg2':      'Offshore passages',
    'acq.form.bg3':      'Transatlantic crossings',
    'acq.form.bg4':      'Circumnavigation experience',
    'acq.form.message':  'Your Project (optional)',
    'acq.form.submit':   'Register My Interest',
    'acq.form.note':     'Your information is treated with complete discretion and is never shared with third parties.',
    'acq.form.success':  'Thank you. We will be in touch shortly.',

    /* Contact */
    'contact.label':        'Contact',
    'contact.title':        'Speak with\nthe Studio',
    'contact.text':         'We welcome enquiries from qualified buyers and serious offshore cruising enthusiasts. Reach us directly or complete the form.',
    'contact.studio':       'Studio',
    'contact.emailLabel':   'Email',
    'contact.form.name':    'Name',
    'contact.form.email':   'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit':  'Send Message',
    'contact.form.success': 'Message received. We will reply shortly.',

    /* Footer */
    'footer.tagline': 'Built for the long passage. Designed for life aboard.',
    'footer.copy':    '© 2025 Nine Knots Marine. All rights reserved.',
  },

  /* ────────────────────────── FRENCH ────────────────────── */
  fr: {
    'nav.logo':       'NINE KNOTS',
    'nav.project':    'Le Projet',
    'nav.yacht':      'Le Yacht',
    'nav.design':     'Design',
    'nav.innovation': 'Innovation',
    'nav.gallery':    'Galerie',
    'nav.acquire':    'Acquérir',
    'nav.contact':    'Contact',

    'imageband.quote': 'La mer est plus belle à 9 nœuds.',

    'hero.eyebrow':      'E-Trawler de Grand Large',
    'hero.headline':     'Conçu pour ceux\nqui croisent au-delà',
    'hero.subheadline':  'Le 9K42 est un e-trawler compact et efficient — 12,8 m de design réfléchi, construit pour les traversées offshore à 7 nœuds avec une consommation quasi nulle.',
    'hero.cta1':         'Découvrir le 9K42',
    'hero.cta2':         'Manifester son intérêt',
    'hero.stat1':        'Longueur hors-tout',
    'hero.stat2':        'Parc batterie',
    'hero.stat3':        'Coques — Première série',

    'project.label':   'Le Projet',
    'project.title':   'Une nouvelle vision\nde la croisière hauturière',
    'project.p1':      'Nine Knots Marine est né d\'années d\'expérience offshore et d\'une conviction simple : la traversée océanique idéale est celle où le yacht s\'efface pour laisser la mer occuper toute la place.',
    'project.p2':      'Nous avons remis en question chaque convention. Nous avons étudié ce qui casse, ce qui s\'use, ce qui fatigue les équipages lors des longues traversées — et ce qui, à l\'inverse, inspire la confiance et la sérénité. Puis nous avons conçu un yacht à moteur qui répond honnêtement à ces questions.',
    'project.p3':      'Pas un hors-bord de vitesse. Pas un appartement flottant. Un vrai yacht hauturier à moteur électrique : sûr, capable, autonome — et profondément satisfaisant à vivre à bord pendant des semaines.',
    'project.quote':   '« La mer exige l\'honnêteté d\'un yacht. Nous en avons conçu un qui peut répondre. »',
    'project.origin1': 'Fondé sur une expérience profonde de la croisière hauturière',
    'project.origin2': 'Conçu en collaboration avec des navigateurs hauturiers confirmés',
    'project.origin3': 'Construit en Europe du Nord, selon les normes structurelles les plus élevées',

    'yacht.label':          'Le Yacht',
    'yacht.title':          'Conçu pour la croisière hauturière efficiente',
    'yacht.intro':          'Douze virgule huit mètres de design maîtrisé. Une carène de déplacement conçue pour une faible consommation énergétique, une progression régulière à 7 nœuds et une réelle indépendance offshore.',
    'yacht.spec1.label':    'Longueur hors-tout',
    'yacht.spec1.detail':   'LFl ~12 m',
    'yacht.spec2.label':    'Largeur',
    'yacht.spec2.detail':   'Carène de déplacement, optimisée pour l\'efficience',
    'yacht.spec3.label':    'Déplacement',
    'yacht.spec3.detail':   'E-Trawler léger et efficient',
    'yacht.spec4.label':    'Parc batterie',
    'yacht.spec4.detail':   '80–100 kWh lithium fer phosphate, bus 96V DC',
    'yacht.spec5.label':    'Propulsion électrique',
    'yacht.spec5.detail':   'Double motorisation silencieuse',
    'yacht.spec6.label':    'Vitesse de croisière',
    'yacht.spec6.detail':   'Point de fonctionnement idéal à 7 nœuds',
    'yacht.note':           'Construction sandwich composite à âme mousse. Bilge keels / appendices stabilisateurs passifs disponibles pour le confort hauturier. Catégorie ISO A/B selon spécification finale et charge réelle.',

    'qualities.label':      'Qualités essentielles',
    'qualities.title':      'Ce pour quoi nous avons construit',
    'qualities.q1.title':   'Sécurité hauturière',
    'qualities.q1.text':    'Une coque composite à double peau construite selon la norme ISO Catégorie A — océan. Direction redondante, cockpit auto-videur, intégrité structurelle conçue pour les conditions de survie.',
    'qualities.q2.title':   'Autonomie véritable',
    'qualities.q2.text':    'Des mois au mouillage sans marina. Le solaire, l\'éolien et la propulsion hybride assurent une indépendance énergétique durable. Le yacht se suffit à lui-même pour que vous vous concentriez sur la navigation.',
    'qualities.q3.title':   'Tenue à la mer',
    'qualities.q3.text':    'Une carène conçue pour une progression régulière et confortable dans tous les états de mer. Déplacement modéré, étrave profonde et stabilité initiale généreuse — une route stable et prévisible.',
    'qualities.q4.title':   'Confort à bord',
    'qualities.q4.text':    'Qualité de vie à bord sans compromis. Isolé aux normes scandinaves, parfaitement insonorisé, ergonomiquement pensé. Un espace qui se sent comme chez soi après trente jours en mer.',
    'qualities.q5.title':   'Simplicité réfléchie',
    'qualities.q5.text':    'Chaque système sélectionné pour sa fiabilité, sa facilité de réparation et sa facilité d\'utilisation. Rien de superflu. Le résultat est un yacht que deux personnes peuvent manœuvrer en confiance, partout dans le monde.',
    'qualities.q6.title':   'Artisanat d\'excellence',
    'qualities.q6.text':    'La tradition européenne de construction navale appliquée à chaque surface, chaque joint, chaque accastillage. Teck, inox et composites premium, finis avec le soin que seule une série limitée permet.',

    'philosophy.label':     'Philosophie de design',
    'philosophy.title':     'La forme suit\nla mer',
    'philosophy.lead':      'Nous nous sommes inspirés de la tradition de design scandinave : la beauté est une conséquence de l\'honnêteté, non de l\'ornement.',
    'philosophy.p1':        'Chaque ligne du 9K42 a été tracée dans un but précis — l\'angle du poste de navigation, la hauteur du panneau, la profondeur du cockpit. Là où d\'autres yachts superposent l\'esthétique, nous avons retenu l\'essentiel. Le résultat est un intérieur serein plutôt que stylisé.',
    'philosophy.p2':        'Sur le pont, un aménagement épuré permet de se déplacer en confiance dans toutes les conditions. La barre offre une visibilité à 360° avec tous les instruments à portée de main. Le cockpit est protégé, généreux et dimensionné pour les longues traversées.',
    'philosophy.p3':        'La couleur du chêne huilé. Le poids d\'un accastillage inox. Le silence d\'une propulsion électrique à vitesse de croisière. Ces détails ne sont pas décoratifs. Ils sont la mesure d\'un yacht à moteur sérieux.',
    'philosophy.signature': '— Le Studio de Design Nine Knots, Göteborg',

    'forwhom.label':    'Pour qui',
    'forwhom.title':    'Pour le capitaine qui a déjà traversé des océans',
    'forwhom.p1':       'Vous avez accumulé les milles et la sagesse en mer. Vous savez faire la différence entre un yacht qui a l\'air capable et un qui l\'est vraiment. Vous avez vécu les compromis des bateaux précédents et vous avez une idée précise de ce que vous feriez différemment.',
    'forwhom.p2':       'Nine Knots Marine est fait pour l\'armateur qui entend utiliser son yacht — pas pour le laisser à quai et le mettre en charter. Pour le couple qui veut traverser le Pacifique sans équipage professionnel. Pour le navigateur expérimenté qui planifie un tour du monde et attend que le bateau soit prêt avant lui.',
    'forwhom.profile1': 'Le couple transatlantique qui planifie de longues traversées hauturières',
    'forwhom.profile2': 'Le navigateur hauturier solitaire ou en équipage réduit',
    'forwhom.profile3': 'L\'armateur à la recherche d\'un investissement durable et réfléchi dans la navigation sérieuse',

    'innovation.label':    'Innovation & Énergie',
    'innovation.title':    'La technologie au\nservice de l\'indépendance',
    'innovation.intro':    'Nine Knots Marine intègre des systèmes avancés avec un seul principe directeur : ils doivent rendre votre vie en mer plus silencieuse, plus sûre et plus autonome — pas plus complexe.',
    'innovation.i1.title': 'Propulsion hybride',
    'innovation.i1.text':  'Double motorisation électrique 2 × 25 kW sur bus DC 96V : redondance totale, manœuvres précises, silence absolu. Un groupe électrogène d\'appoint de 7,5 à 9 kW agit en range extender raisonné — pas une propulsion principale, mais un prolongateur d\'autonomie fiable en hauturier.',
    'innovation.i2.title': 'Indépendance énergétique',
    'innovation.i2.text':  'Intégration solaire significative couplée à une architecture Victron et des contrôleurs MPPT. Le système est dimensionné pour la recharge partielle par le solaire seul, l\'alimentation hôtelière au mouillage et la réduction des heures de groupe. Sous les tropiques, des mois d\'autonomie sans démarrer le moteur.',
    'innovation.i3.title': 'Système de dessalement',
    'innovation.i3.text':  'Un osmoseur de 240 L/h, soutenu par 1 800 L de cuve inox. Indépendance en eau douce, partout. Un second système manuel d\'urgence est monté en série.',
    'innovation.i4.title': 'Navigation & sécurité',
    'innovation.i4.text':  'Radar Furuno, AIS et traceur de cartes intégrés. Communication satellite Iridium. Balise EPIRB et radeau de survie dimensionnés à l\'équipage. Tous les systèmes critiques sont doublés avec un recours analogique. L\'électronique est à votre service — pas l\'inverse.',

    'gallery.label': 'Galerie',
    'gallery.title': 'Nine Knots Marine en mer',
    'gallery.cap1':  'Passage arctique, eaux calmes du fjord',
    'gallery.cap2':  'En route, côte méditerranéenne',
    'gallery.cap3':  'Au mouillage, Polynésie française',
    'gallery.cap4':  'Vue aérienne, îles grecques',
    'gallery.cap5':  'Au mouillage, Corse',
    'gallery.cap6':  'Terrasse arrière, lumière du soir',
    'gallery.cap7':  'Traversée en haute mer',
    'gallery.cap8':  'Carène au mouillage, eaux claires',
    'gallery.exterior.title': 'Extérieur',
    'gallery.interior.title': 'Design intérieur',
    'gallery.int1':  'Salon principal & poste de barre',
    'gallery.int2':  'Cuisine & espace repas',
    'gallery.int3':  'Cabine principale',

    'acq.label':         'Acquisition',
    'acq.title':         'Rejoindre la première série',
    'acq.intro':         'La première série de production est limitée à douze coques. Si le 9K42 correspond à votre vision de la croisière hauturière, nous vous invitons à manifester votre intérêt. Un membre de notre équipe vous contactera personnellement pour discuter de votre projet.',
    'acq.form.name':     'Nom complet',
    'acq.form.email':    'Adresse e-mail',
    'acq.form.country':  'Pays',
    'acq.form.background': 'Expérience en navigation',
    'acq.form.bg0':      'Sélectionner…',
    'acq.form.bg1':      'Navigation côtière et cabotage',
    'acq.form.bg2':      'Traversées hauturières',
    'acq.form.bg3':      'Traversées transatlantiques',
    'acq.form.bg4':      'Expérience de circumnavigation',
    'acq.form.message':  'Votre projet (facultatif)',
    'acq.form.submit':   'Manifester mon intérêt',
    'acq.form.note':     'Vos informations sont traitées avec une totale discrétion et ne sont jamais communiquées à des tiers.',
    'acq.form.success':  'Merci. Nous vous contacterons prochainement.',

    'contact.label':        'Contact',
    'contact.title':        'Contacter\nle studio',
    'contact.text':         'Nous accueillons favorablement les demandes d\'acheteurs qualifiés et des passionnés de navigation sérieuse. Contactez-nous directement ou remplissez le formulaire.',
    'contact.studio':       'Studio',
    'contact.emailLabel':   'E-mail',
    'contact.form.name':    'Nom',
    'contact.form.email':   'E-mail',
    'contact.form.subject': 'Objet',
    'contact.form.message': 'Message',
    'contact.form.submit':  'Envoyer',
    'contact.form.success': 'Message reçu. Nous vous répondrons rapidement.',

    'footer.tagline': 'Construit pour la grande traversée. Conçu pour vivre à bord.',
    'footer.copy':    '© 2025 Nine Knots Marine. Tous droits réservés.',
  },

  /* ─────────────────────── SIMPLIFIED CHINESE ───────────── */
  zh: {
    'nav.logo':       '九节',
    'nav.project':    '项目介绍',
    'nav.yacht':      '游艇',
    'nav.design':     '设计',
    'nav.innovation': '创新',
    'nav.gallery':    '图库',
    'nav.acquire':    '购买',
    'nav.contact':    '联系我们',

    'imageband.quote': '九节航速，正是大海最美的速度。',

    'hero.eyebrow':      '远洋电动拖网艇',
    'hero.headline':     '为驶向远方的\n航海者而造',
    'hero.subheadline':  '9K42是一艘紧凑高效的电动拖网艇——12.8米的精心设计，以7节巡航速度完成远洋航行，燃料消耗近乎为零。',
    'hero.cta1':         '探索 9K42',
    'hero.cta2':         '登记购买意向',
    'hero.stat1':        '总长',
    'hero.stat2':        '电池组',
    'hero.stat3':        '艘——首批系列',

    'project.label':   '项目介绍',
    'project.title':   '蓝水巡航的\n全新愿景',
    'project.p1':      '九节海洋诞生于多年离岸航行的经验与一个清晰的信念：完美的大洋航行，应让游艇退入背景，让大海成为主角。',
    'project.p2':      '我们重新审视了每一项惯例，研究了长途航行中容易损坏、磨损和令船员疲劳的一切——以及相反地，能带来信心与平静的因素。然后，我们诚实地回答了这些问题，设计出了这艘电动游艇。',
    'project.p3':      '它不是快艇，也不是浮动公寓。这是一艘真正的远洋电动游艇：安全、可靠、自给自足——在船上连续生活数周，仍令人深感满足。',
    'project.quote':   '「大海要求游艇保持诚实。我们设计了一艘能够回应这一要求的电动游艇。」',
    'project.origin1': '根植于深厚的离岸竞技航行经验',
    'project.origin2': '与资深蓝水航海者协作设计',
    'project.origin3': '在北欧建造，达到最高结构标准',

    'yacht.label':          '船舶规格',
    'yacht.title':          '专为高效远洋巡航而设计',
    'yacht.intro':          '12.8米的精心设计。一艘排水型船体，专为低能耗、7节稳定前进和真正的海上能源独立而优化。',
    'yacht.spec1.label':    '总长',
    'yacht.spec1.detail':   '水线长约12米',
    'yacht.spec2.label':    '船宽',
    'yacht.spec2.detail':   '排水型船体，效率优化',
    'yacht.spec3.label':    '排水量',
    'yacht.spec3.detail':   '轻量高效电动拖网艇',
    'yacht.spec4.label':    '电池组',
    'yacht.spec4.detail':   '80–100千瓦时磷酸铁锂，96V直流母线',
    'yacht.spec5.label':    '电力推进',
    'yacht.spec5.detail':   '双电机静音推进',
    'yacht.spec6.label':    '巡航速度',
    'yacht.spec6.detail':   '7节最佳效率工况',
    'yacht.note':           '泡沫芯夹心复合材料结构。可配备舭龙骨/被动稳定鳍以提升远洋舒适性。最终ISO类别（A/B类）视实际规格及载重而定。',

    'qualities.label':      '核心品质',
    'qualities.title':      '我们为之而造',
    'qualities.q1.title':   '远洋安全',
    'qualities.q1.text':    '双层复合材料船体，符合ISO A类——大洋级别。冗余舵系统、自排水驾驶舱，结构完整性专为极端海况而设计。',
    'qualities.q2.title':   '真正的自主性',
    'qualities.q2.text':    '无需码头，可在锚地停泊数月。太阳能、风能和混合动力提供持续的能源独立性。9K42自我维持，让您专注于巡航旅程。',
    'qualities.q3.title':   '适航性',
    'qualities.q3.text':    '船体专为在各种海况下稳定舒适前进而设计。适中的排水量、深吃水首柱和充裕的初稳性，带来平静、可预测的海上运动表现。',
    'qualities.q4.title':   '船上舒适',
    'qualities.q4.text':    '毫不妥协的居住品质。达到斯堪的纳维亚标准的绝热设计，卓越的隔音效果，符合人体工学的布局。在海上生活三十天后，仍感宾至如归。',
    'qualities.q5.title':   '精简设计',
    'qualities.q5.text':    '每个系统均以可靠性、可维修性和易用性为选择标准。没有多余的设计。两个人便可在世界任何地方自信地驾驶这艘游艇。',
    'qualities.q6.title':   '精湛工艺',
    'qualities.q6.text':    '欧洲造船传统贯穿于每一个表面、接缝和配件。优质柚木、不锈钢和复合材料，以限量系列才有的细心精工收尾。',

    'philosophy.label':     '设计理念',
    'philosophy.title':     '形式跟随\n大海',
    'philosophy.lead':      '我们从斯堪的纳维亚设计传统中汲取灵感：美是诚实的结果，而非装饰的产物。',
    'philosophy.p1':        '9K42的每一条内饰线都有其目的——导航台的角度、舱口的高度、驾驶舱的深度。其他游艇叠加美学，我们则回归到结构本身。结果是一个感觉宁静而非刻意设计的内饰。',
    'philosophy.p2':        '在甲板上，简洁无杂乱的布局让人在任何海况下都能自信移动。舵位提供360°视野，所有仪器触手可及。驾驶舱有保护、够大，专为漫长的远洋航行而设计。',
    'philosophy.p3':        '涂油橡木的色泽。不锈钢配件的分量。巡航速度下电驱系统的静谧。这些细节不是装饰性的，它们是衡量一艘严肃电动游艇的标准。',
    'philosophy.signature': '— 九节设计工作室，哥德堡',

    'forwhom.label':    '适合人群',
    'forwhom.title':    '为已经跨越大洋的船长',
    'forwhom.p1':       '您已积累了海里数与离岸智慧。您知道一艘看起来能干的游艇与真正能干的游艇之间的区别。您经历过以往船只的种种妥协，对自己想要改变的地方有清晰的认识。',
    'forwhom.p2':       '9K42是为那些打算使用自己游艇的船主而造——不是停在码头出租。是为那些想在没有专业船员的情况下穿越太平洋的夫妇。是为那些计划环球航行、希望游艇在自己准备好之前就已就绪的资深船长。',
    'forwhom.profile1': '计划进行长途蓝水航行的跨大西洋夫妻',
    'forwhom.profile2': '经验丰富的单人或精简船员离岸航海者',
    'forwhom.profile3': '寻求在严肃航行领域进行持久、深思熟虑投资的船主',

    'innovation.label':    '创新与能源',
    'innovation.title':    '技术为\n独立自主而服务',
    'innovation.intro':    '9K42整合了先进系统，遵循一个核心原则：让您的海上生活更安静、更安全、更自给自足——而不是更复杂。',
    'innovation.i1.title': '混合动力推进',
    'innovation.i1.text':  '双电机2×25千瓦，96V直流母线：完全冗余、精准操控、绝对静音。一台7.5至9千瓦柴油发电机作为理性的增程器——不是主推进，而是远洋航行中可靠的自主延伸手段。',
    'innovation.i2.title': '能源独立',
    'innovation.i2.text':  '大规模太阳能集成，配合Victron架构和MPPT充电控制器。系统设计兼顾仅靠太阳能的部分充电、锚地船载用电及减少发电机运行时间。在阳光充沛的地区，无需启动发动机即可实现数月自主。',
    'innovation.i3.title': '造水系统',
    'innovation.i3.text':  '240升/小时反渗透造水机，配1800升不锈钢水箱。在任何地方实现淡水独立。标配手动应急备用装置。',
    'innovation.i4.title': '导航与安全系统',
    'innovation.i4.text':  '集成 Furuno 雷达、AIS 和海图仪。铱星卫星通信。根据船员人数配备 EPIRB 和救生筏。所有关键系统均有模拟备份。电子设备为您服务——而非相反。',

    'gallery.label': '图库',
    'gallery.title': '九节海洋在海上',
    'gallery.cap1':  '北极航行，平静峡湾水域',
    'gallery.cap2':  '航行中，地中海海岸',
    'gallery.cap3':  '停泊于法属波利尼西亚',
    'gallery.cap4':  '鸟瞰图，希腊群岛',
    'gallery.cap5':  '停泊于科西嘉岛',
    'gallery.cap6':  '艉部露台，夜色灯光',
    'gallery.cap7':  '远洋航行',
    'gallery.cap8':  '锚泊，清澈水域',
    'gallery.exterior.title': '外观',
    'gallery.interior.title': '内饰设计',
    'gallery.int1':  '主沙龙与驾驶台',
    'gallery.int2':  '厨房与餐厅',
    'gallery.int3':  '主舱',

    'acq.label':         '购买',
    'acq.title':         '加入首批系列',
    'acq.intro':         '首批生产限量十二艘。如果9K42与您对远洋巡航的愿景相符，我们诚邀您登记购买意向。我们的团队成员将亲自联系您，探讨您的项目。',
    'acq.form.name':     '姓名',
    'acq.form.email':    '电子邮件',
    'acq.form.country':  '国家/地区',
    'acq.form.background': '巡航经历',
    'acq.form.bg0':      '请选择…',
    'acq.form.bg1':      '近海及沿岸巡航',
    'acq.form.bg2':      '离岸航行',
    'acq.form.bg3':      '跨大西洋航行',
    'acq.form.bg4':      '环球航行经验',
    'acq.form.message':  '您的项目（选填）',
    'acq.form.submit':   '登记购买意向',
    'acq.form.note':     '您的信息将受到严格保密，绝不与第三方共享。',
    'acq.form.success':  '感谢您的关注，我们将尽快与您联系。',

    'contact.label':        '联系我们',
    'contact.title':        '联系\n设计工作室',
    'contact.text':         '我们欢迎符合条件的买家及认真的远洋巡航爱好者垂询。请直接联系我们或填写表单。',
    'contact.studio':       '工作室',
    'contact.emailLabel':   '电子邮件',
    'contact.form.name':    '姓名',
    'contact.form.email':   '电子邮件',
    'contact.form.subject': '主题',
    'contact.form.message': '留言',
    'contact.form.submit':  '发送消息',
    'contact.form.success': '消息已收到，我们将尽快回复。',

    'footer.tagline': '为远洋而造，为海上生活而设计。',
    'footer.copy':    '© 2025 九节海洋。保留所有权利。',
  },
};

/* ─────────────────────────────────────────────────────────
   2. LANGUAGE ENGINE
───────────────────────────────────────────────────────── */
let currentLang = 'en';

function setLanguage(lang) {
  if (!translations[lang] || lang === currentLang) return;

  document.body.classList.add('lang-switching');

  setTimeout(() => {
    currentLang = lang;
    document.documentElement.lang = lang;

    translatePage();
    updateLangButtons();
    updatePageTitle();

    document.body.classList.remove('lang-switching');
  }, 180);
}

function translatePage() {
  const t = translations[currentLang];

  /* Text content */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      /* Preserve line breaks written as \n */
      if (el.tagName === 'H1' || el.tagName === 'H2') {
        el.innerHTML = t[key].replace(/\n/g, '<br>');
      } else {
        el.textContent = t[key];
      }
    }
  });

  /* Placeholders */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
}

function updateLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
  });
}

function updatePageTitle() {
  const titles = {
    en: 'NINE KNOTS MARINE — Long-Range Cruising Yacht',
    fr: 'NINE KNOTS MARINE — Voilier de Grand Voyage',
    zh: '九节海洋 — 远洋电动游艇',
  };
  document.title = titles[currentLang] || titles.en;
}

/* ─────────────────────────────────────────────────────────
   3. NAVIGATION
───────────────────────────────────────────────────────── */
function initNavigation() {
  const navbar   = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  let menuOpen = false;

  /* Scroll-based nav style */
  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Hamburger toggle */
  function toggleMenu(open) {
    menuOpen = open;
    hamburger.classList.toggle('open', open);
    mobileMenu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  hamburger.addEventListener('click', () => toggleMenu(!menuOpen));

  /* Close menu on mobile nav link click */
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  /* Smooth scroll for all anchor links */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = navbar.offsetHeight + 8;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ─────────────────────────────────────────────────────────
   4. SCROLL REVEAL
───────────────────────────────────────────────────────── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');

  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  });

  /* Stagger children of grids */
  document.querySelectorAll(
    '.qualities-grid, .innovation-grid, .specs-grid, .gallery-grid'
  ).forEach(grid => {
    Array.from(grid.children).forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.07}s`;
    });
  });

  els.forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────────────────────
   5. FORMS
───────────────────────────────────────────────────────── */
function initForms() {
  handleForm('acquisitionForm', 'acqSuccess');
  handleForm('contactForm', 'contactSuccess');
}

function handleForm(formId, successId) {
  const form    = document.getElementById(formId);
  const success = document.getElementById(successId);
  if (!form || !success) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    /* Basic validation */
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      if (!field.value.trim()) {
        field.style.borderBottomColor = '#c0392b';
        valid = false;
      } else {
        field.style.borderBottomColor = '';
      }
    });

    if (!valid) return;

    /* Simulate async submission */
    const btn = form.querySelector('[type="submit"]');
    btn.textContent = '…';
    btn.disabled = true;

    setTimeout(() => {
      form.style.display = 'none';
      success.style.display = 'block';
    }, 900);
  });

  /* Clear error state on input */
  form.querySelectorAll('.form-input').forEach(field => {
    field.addEventListener('input', () => {
      field.style.borderBottomColor = '';
    });
  });
}

/* ─────────────────────────────────────────────────────────
   6. LANGUAGE BUTTON EVENTS
───────────────────────────────────────────────────────── */
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang) setLanguage(lang);
    });
  });
}

/* ─────────────────────────────────────────────────────────
   7. GALLERY LIGHTBOX (minimal)
───────────────────────────────────────────────────────── */
function initGallery() {
  /* Caption always visible on touch devices */
  if ('ontouchstart' in window) {
    document.querySelectorAll('.gallery-caption').forEach(cap => {
      cap.style.opacity = '1';
      cap.style.transform = 'translateY(0)';
    });
  }
}

/* ─────────────────────────────────────────────────────────
   8. INIT
───────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initReveal();
  initForms();
  initLangSwitcher();
  initGallery();
});
