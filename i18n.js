// Bilingual (Turkish/English) content for the site. Each key maps to the
// exact innerHTML shown for that element in each language - Turkish is the
// default/fallback already baked into the HTML, English is the real
// translation, not machine-translated flat prose (this is activist,
// rhetorical writing, translated to keep the same force).
const STRINGS = {
  // ---- shared: nav / footer ----
  'nav.join': {
    tr: 'Nasıl Katılırım?',
    en: 'How Do I Join?',
  },
  'nav.archive': {
    tr: 'Barış Saldırıları Arşivi',
    en: 'Peace Attacks Archive',
  },
  'nav.start': {
    tr: 'Kendi Saldırını Başlat',
    en: 'Start Your Own Attack',
  },
  'nav.contact': {
    tr: 'İletişim',
    en: 'Contact',
  },
  'footer.rights': {
    tr: '&copy; 2025 Barış Bir Saldırı Biçimidir. Tüm Hakları Saklıdır.',
    en: '&copy; 2025 Barış Bir Saldırı Biçimidir. All Rights Reserved.',
  },

  // ---- index.html: hero ----
  'hero.title': {
    tr: 'Barış bir saldırı biçimidir.',
    en: 'Peace is a form of attack.',
  },
  'hero.subtitle': {
    tr: 'Senin eylemin barışın ta kendisi olabilir. Harekete geç.',
    en: 'Your own action can be peace itself. Take action.',
  },
  'hero.cta': {
    tr: 'Şimdi Başla <i class="fas fa-arrow-right"></i>',
    en: 'Start Now <i class="fas fa-arrow-right"></i>',
  },

  // ---- index.html: campaign-intro ----
  'campaign.title': {
    tr: '"Barış Edilgen Değildir."',
    en: '"Peace Is Not Passive."',
  },
  'campaign.p1': {
    tr: 'Dünyada savaşlara değil, barışa saldıran bir hareket başlıyor. PeaceAttacks.com, çatışmayı değil çözümü, sessizliği değil dayanışmayı, şiddeti değil stratejik barışı savunanların platformudur.',
    en: 'A movement is beginning that attacks not wars, but peace itself. PeaceAttacks.com is the platform for those who champion resolution over conflict, solidarity over silence, and strategic peace over violence.',
  },
  'campaign.p2': {
    tr: 'Biz barışı beklemiyoruz. Onu inşa ediyoruz. Gerekirse saldırarak. Diplomasiyi, kültürü, empatiyi ve cesareti silah gibi kullanarak…',
    en: 'We are not waiting for peace. We are building it. By attacking, if we have to. Wielding diplomacy, culture, empathy, and courage like weapons…',
  },
  'campaign.p3': {
    tr: 'Artık savaşanlara karşı değil, savaşı mümkün kılan zihniyete karşı savaşıyoruz.',
    en: 'We are no longer fighting those who wage war - we are fighting the mindset that makes war possible.',
  },
  'campaign.actions.p': {
    tr: '🌍 Bize katıl. 📢 Bir barış saldırısı başlat. 🕊️ peaceattacks.com',
    en: '🌍 Join us. 📢 Launch a peace attack. 🕊️ peaceattacks.com',
  },
  'campaign.actions.btn': {
    tr: 'Harekete Geç!',
    en: 'Take Action!',
  },

  // ---- index.html: #nasil-katilirim ----
  'join.title': {
    tr: '<i class="fas fa-fist-raised"></i> Nasıl Katılırım?',
    en: '<i class="fas fa-fist-raised"></i> How Do I Join?',
  },
  'join.intro': {
    tr: 'Bir barış saldırganı olmak için izin beklemezsin. Bugün, şu an, küçük bir adımla başlarsın.',
    en: "You don't wait for permission to become a peace attacker. You start today, right now, with one small step.",
  },
  'join.step1.title': { tr: 'Bir cephe seç', en: 'Choose a front' },
  'join.step1.p': {
    tr: 'Kiminle çatışma halindesin — bir arkadaşınla, ailenle, siyasi karşıtınla, bir topluluk ya da bir ülkeyle? Saldırını orada başlat.',
    en: 'Who are you in conflict with - a friend, your family, a political opponent, a community, a country? Start your attack there.',
  },
  'join.step2.title': { tr: 'Tek taraflı hareket et', en: 'Act unilaterally' },
  'join.step2.p': {
    tr: 'Karşılık beklemeden ilk adımı at: bir diyalog çağrısı, bir iyilik göstergesi, paylaşılan bir değeri yüksek sesle söylemek. Barış saldırısı, karşı tarafın onayını istemez.',
    en: "Take the first step without expecting anything back: a call for dialogue, an act of goodwill, naming a shared value out loud. A peace attack doesn't ask the other side's permission.",
  },
  'join.step3.title': { tr: 'Israrlı ol', en: 'Be persistent' },
  'join.step3.p': {
    tr: 'Bir kez denemek yeterli değil. Düşmanlık alışkanlıkla büyür; barış da öyle büyür. Sessiz kalma — barışın tarafında olduğunu göster.',
    en: 'Trying once is not enough. Hostility grows through habit - so does peace. Do not stay silent; show that you stand on the side of peace.',
  },
  'join.step4.title': { tr: 'Anlat, yay', en: 'Tell it, spread it' },
  'join.step4.p': {
    tr: 'Yaptığın barış saldırısını çevrene anlat. Manifestoyu paylaş. Bir kişiyi daha bu zihniyete kazandır — saldırı, çoğaldıkça güçlenir.',
    en: 'Tell the people around you about your peace attack. Share the manifesto. Win one more person over to this mindset - the attack grows stronger as it multiplies.',
  },

  // ---- index.html: #arsiv ----
  'archive.title': {
    tr: '<i class="fas fa-archive"></i> Barış Saldırıları Arşivi',
    en: '<i class="fas fa-archive"></i> Peace Attacks Archive',
  },
  'archive.intro': {
    tr: 'Manifestomuzda tanımladığımız saldırı biçimleri — her biri, savaşın mantığını çökertmek için stratejik olarak kullanılan gerçek bir yöntem.',
    en: 'The forms of attack defined in our manifesto - each one a real method, used strategically to collapse the logic of war.',
  },
  'archive.card1.title': { tr: 'Tek Taraflı İyilik Göstergeleri', en: 'Unilateral Acts of Goodwill' },
  'archive.card1.p': {
    tr: 'Karşılık beklemeden atılan ilk adım — karşı tarafın savaş bahanesini elinden alır.',
    en: 'The first step, taken without expecting anything in return - it strips the other side of its excuse for war.',
  },
  'archive.card2.title': { tr: 'Her Fırsatta Diyalog Çağrısı', en: 'A Call for Dialogue at Every Opportunity' },
  'archive.card2.p': {
    tr: 'Sessizlik taraf olmaktır. Israrla, her fırsatta masaya çağırmak bir saldırı biçimidir.',
    en: 'Silence is taking a side. Persistently calling the other side to the table, at every opportunity, is itself a form of attack.',
  },
  'archive.card3.title': { tr: 'Kültürel İş Birlikleri', en: 'Cultural Collaborations' },
  'archive.card3.p': {
    tr: 'Sanat, müzik, mutfak, dil — düşmanlığın büyüdüğü zemini paylaşılan üretime çevirmek.',
    en: 'Art, music, food, language - turning the ground where hostility grows into shared creation.',
  },
  'archive.card4.title': { tr: 'Ortak İnsani Değerlerin Vurgulanması', en: 'Emphasizing Shared Human Values' },
  'archive.card4.p': {
    tr: 'Ayrıştıran değil, iki tarafın da zaten paylaştığı değeri yüksek sesle söylemek.',
    en: 'Naming out loud, not what divides, but the value both sides already share.',
  },
  'archive.card5.title': { tr: 'Sınırları Aşan Dayanışma', en: 'Solidarity That Crosses Borders' },
  'archive.card5.p': {
    tr: 'Bir sınırın, bir cephenin ya da bir kimliğin ötesine geçen gerçek destek eylemi.',
    en: 'A real act of support that reaches past a border, a front line, or an identity.',
  },
  'archive.card6.title': { tr: 'Stratejik, Bilinçli, Israrlı Yürütme', en: 'Strategic, Deliberate, Persistent Execution' },
  'archive.card6.p': {
    tr: 'Bu bir anlık jest değil. Barış saldırısı, savaşın mantığı çökene kadar sürdürülen bir yöntemdir.',
    en: 'This is not a one-off gesture. A peace attack is a method sustained until the logic of war collapses.',
  },

  // ---- index.html: #kendi-saldirini-baslat ----
  'start.title': {
    tr: '<i class="fas fa-flag"></i> Kendi Saldırını Başlat',
    en: '<i class="fas fa-flag"></i> Start Your Own Attack',
  },
  'start.intro': {
    tr: 'Harita ve interaktif araçlar yakında burada olacak. Bugün için üç adım yeterli:',
    en: 'A map and interactive tools will be here soon. For today, three steps are enough:',
  },
  'start.step1': {
    tr: '<strong>Adını koy.</strong> Hangi çatışmaya, hangi cepheye saldıracaksın? Yazılı olarak tanımla.',
    en: '<strong>Name it.</strong> Which conflict, which front are you going to attack? Define it in writing.',
  },
  'start.step2': {
    tr: '<strong>Eylemi seç.</strong> Yukarıdaki arşivden bir yöntem seç ya da kendi yöntemini icat et.',
    en: '<strong>Choose the act.</strong> Pick a method from the archive above, or invent your own.',
  },
  'start.step3': {
    tr: '<strong>Uygula ve paylaş.</strong> Saldırını gerçekleştir, sonra manifestoyu ve bu siteyi paylaşarak yay.',
    en: '<strong>Carry it out, and share it.</strong> Execute your attack, then spread it by sharing the manifesto and this site.',
  },
  'start.cta': {
    tr: 'Manifestoyu Oku <i class="fas fa-arrow-right"></i>',
    en: 'Read the Manifesto <i class="fas fa-arrow-right"></i>',
  },

  // ---- index.html: #iletisim ----
  'contact.title': {
    tr: '<i class="fas fa-envelope"></i> İletişim',
    en: '<i class="fas fa-envelope"></i> Contact',
  },
  'contact.p': {
    tr: 'Doğrudan iletişim kanalları yakında burada olacak. Şimdilik aşağıdaki kanallardan takip edebilirsin — canlıya alındıkça bu bölüm güncellenecek.',
    en: 'Direct contact channels will be here soon. For now you can follow the channels below - this section will be updated as they go live.',
  },

  // ---- manifesto.html ----
  'manifesto.title': {
    tr: '✊ Barış Saldırıları Manifestosu',
    en: '✊ Peace Attacks Manifesto',
  },
  'manifesto.intro': {
    tr: 'Bu bir fikir değil. Bu bir eylemdir.',
    en: 'This is not an idea. This is an act.',
  },
  'manifesto.p1': {
    tr: 'Bizler, çatışmanın kader olmadığını, savaşın kaçınılmaz olmadığını, düşmanlığın sonsuz sürmeyeceğini biliyoruz.',
    en: 'We know that conflict is not fate, that war is not inevitable, and that hostility will not last forever.',
  },
  'manifesto.p2': {
    tr: 'Barış edilgen değildir. Barış bir direnç biçimidir. Bir saldırı yöntemidir.',
    en: 'Peace is not passive. Peace is a form of resistance. It is a method of attack.',
  },
  'manifesto.p3': {
    tr: 'Ve biz, bu yöntemi silah gibi kullanmaya kararlıyız.',
    en: 'And we are determined to wield this method like a weapon.',
  },
  'manifesto.h3.believe': { tr: 'Neye İnanıyoruz?', en: 'What Do We Believe?' },
  'manifesto.believe.li1': {
    tr: 'Barış, edilgenliğin değil, <strong>cesaretin</strong> işaretidir.',
    en: 'Peace is a mark not of passivity, but of <strong>courage</strong>.',
  },
  'manifesto.believe.li2': {
    tr: 'Barış arayan taraf, zayıf değil; daha <strong>ileri görüşlü, daha güçlü</strong> olandır.',
    en: 'The side that seeks peace is not weak - it is the <strong>more far-sighted, the stronger</strong> one.',
  },
  'manifesto.believe.li3': {
    tr: 'Düşmanlık, alışkanlıkla büyür; biz bu zinciri kırmak için buradayız.',
    en: 'Hostility grows through habit; we are here to break that chain.',
  },
  'manifesto.believe.li4': {
    tr: 'Bir taraf gerçek barış için harekete geçtiğinde, diğer tarafın savaş bahanesi kalmaz.',
    en: 'When one side truly acts for peace, the other side is left with no excuse for war.',
  },
  'manifesto.believe.li5': {
    tr: 'Uzlaşmayı reddedenler, <strong>barış saldırılarıyla yalnızlaştırılır.</strong>',
    en: 'Those who refuse reconciliation are <strong>isolated by peace attacks.</strong>',
  },
  'manifesto.believe.li6': {
    tr: 'Sessiz kalmak taraf olmaktır. Biz tarafız: <strong>barışın tarafı.</strong>',
    en: 'Staying silent is taking a side. We take a side: <strong>the side of peace.</strong>',
  },
  'manifesto.h3.doing': { tr: 'Ne Yapıyoruz?', en: 'What Are We Doing?' },
  'manifesto.doing.p1': {
    tr: 'Biz, saldırı dilini değiştiriyoruz.',
    en: 'We are changing the language of attack.',
  },
  'manifesto.doing.li1': { tr: '<strong>Diplomasiyle saldırıyoruz.</strong>', en: '<strong>We attack with diplomacy.</strong>' },
  'manifesto.doing.li2': { tr: '<strong>Empatiyle saldırıyoruz.</strong>', en: '<strong>We attack with empathy.</strong>' },
  'manifesto.doing.li3': {
    tr: '<strong>Yardımla, kültürle, açıklıkla saldırıyoruz.</strong>',
    en: '<strong>We attack with aid, with culture, with openness.</strong>',
  },
  'manifesto.doing.p2': {
    tr: 'Savaşın mantığını çökertene kadar geri adım atmayacağız.',
    en: 'We will not step back until we collapse the logic of war.',
  },
  'manifesto.h3.what': { tr: 'Barış Saldırısı Nedir?', en: 'What Is a Peace Attack?' },
  'manifesto.what.li1': { tr: 'Tek taraflı iyilik göstergeleri', en: 'Unilateral acts of goodwill' },
  'manifesto.what.li2': { tr: 'Her fırsatta diyalog çağrısı', en: 'A call for dialogue at every opportunity' },
  'manifesto.what.li3': { tr: 'Kültürel iş birlikleri', en: 'Cultural collaborations' },
  'manifesto.what.li4': { tr: 'Ortak insani değerlerin vurgulanması', en: 'Emphasizing shared human values' },
  'manifesto.what.li5': { tr: 'Sınırları aşan dayanışma', en: 'Solidarity that crosses borders' },
  'manifesto.what.li6': {
    tr: 'Tüm bunların stratejik, bilinçli ve ısrarlı olarak yürütülmesi',
    en: 'Carrying all of this out strategically, deliberately, and persistently',
  },
  'manifesto.h3.who': { tr: 'Biz Kimiz?', en: 'Who Are We?' },
  'manifesto.who.p1': {
    tr: 'Biz, "barış olsun" diyenlerden değiliz.',
    en: 'We are not the ones who say, "let there be peace."',
  },
  'manifesto.who.p2': {
    tr: 'Biz, <strong>barış olsun diye saldıranlarız.</strong>',
    en: 'We are <strong>the ones who attack so that there will be peace.</strong>',
  },
  'manifesto.who.p3': {
    tr: 'Biz, zalimliğe karşı sessiz barışı değil, <strong>adaletli ve kararlı barışı savunuyoruz.</strong>',
    en: 'We do not defend a silent peace in the face of cruelty - we defend <strong>a just and resolute peace.</strong>',
  },
  'manifesto.who.p4': {
    tr: 'Ve biliyoruz ki bu dünya, bir taraf barışta ısrar ettiği sürece değişebilir.',
    en: 'And we know this world can change, for as long as one side insists on peace.',
  },
  'manifesto.cta.p': {
    tr: 'Barış bir eylemdir. Bekleme. Saldır.',
    en: "Peace is an act. Don't wait. Attack.",
  },
  'manifesto.cta.btn': {
    tr: 'Şimdi Barış Saldırısı Başlat <i class="fas fa-arrow-right"></i>',
    en: 'Launch a Peace Attack Now <i class="fas fa-arrow-right"></i>',
  },
};

const LANG_KEY = 'peaceAttacksLang';

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const entry = STRINGS[key];
    if (entry && entry[lang] != null) {
      el.innerHTML = entry[lang];
    }
  });
  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
  });
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (e) {
    /* private/blocked storage - language just won't persist across pages */
  }
}

function initLang() {
  let lang = 'tr';
  try {
    lang = localStorage.getItem(LANG_KEY) || 'tr';
  } catch (e) {
    /* ignore */
  }
  applyLang(lang);
  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang-btn')));
  });
}

document.addEventListener('DOMContentLoaded', initLang);
