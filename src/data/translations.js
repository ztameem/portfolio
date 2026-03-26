/**
 * Translation portfolio — one object per piece.
 *
 * List page: listingExcerptAr / listingExcerptEn (~2 lines). Match English/Arabic: omit
 * only the standalone title line if your PDF has one; next lines are the paired preview.
 *
 * Detail page: translationBody is the poem from the first line after that PDF title line.
 * Optional originalExcerpt for Arabic.
 * Optional sideBySideExcerpt: true — under Original (excerpt), show only the first two lines
 *   (from originalExcerpt, or from listingExcerptAr if originalExcerpt is empty), plus a button
 *   to open English + Arabic side by side (full originalExcerpt when set; else listing Arabic only).
 */
export const translationWorks = [
  {
    id: "darwish-lozuf-zahr-allawz",
    titleAr: "لوصف زهر اللوز",
    titleEn: "To Describe the Almond Blossom",
    poetAr: "محمود درويش",
    poetEn: "Mahmoud Darwish",
    listingExcerptAr:
      "ولوصف زهر اللوز، لا موسوعةُ الأزهار تسعفني، ولا القاموسُ يسعفني…\nسيخطفني الكلام إلى أَحابيل البلاغةِ / والبلاغَةُ تجرح المعنى وتمدح جُرْحَهُ،",
    listingExcerptEn:
      "and to describe the almond blossom, no encyclopedia of flowers\naids me, and no dictionary relieves me…",
    translationBody: `and to describe the almond blossom, no encyclopedia of flowers
aids me, and no dictionary relieves me…
words will carry me into the wiles of rhetoric
and rhetoric injures the meaning and praises its wound,
like a man dictating a woman's character
for how can the almond blossom radiate in the language of mine
where i am an echo?
and it is limpid like liquid laughter sprouted
on branches of timid dew…
and it is light like a musically white sentence…
and it is languid like a moment's thought
commanding our fingers
and we write it in vain…
and it is lush like the lines of a poem not written
with letters
to describe the almond blossom it forces me visits to
the unconscious it guides me to tender names
hanging on trees. what is its name?
what is the name of this thing in the poetics of nothing?
it forces me to pierce through gravity and words,
in order for me to feel its weightlessness when it becomes
a whispering ghost, so i make of it what it makes of me
a translucent white
neither homeland nor exile are the words,
but rather the passion of white as describing the almond blossom
neither snow nor cotton, so what is it in
its transcendence over things and names
if the author succeeded in writing a passage
in describing the almond blossom, we would not uncover the fog
from the hills, and all of the people would say:
this is it
these are the words of our national anthem!`,
    originalExcerpt: `ولوصف زهر اللوز، لا موسوعةُ الأزهار
تسعفني، ولا القاموسُ يسعفني...
سيخطفني الكلام إلى أَحابيل البلاغةِ /
والبلاغَةُ تجرح المعنى وتمدح جُرْحَهُ،
كمذكَّرٍ يُمْلي على الأُنثى مشاعرها /
فكيف يشعُّ زهر اللوز في لغتي أَنا
وأنا الصدى؟

وَهُوَ الشفيفُ كضحكة مائية نبتت
على الأغصان من خَفَر الندى...
وَهُوُ الخفيفُ كجملةٍ بيضاءَ موسيقيّةٍ...
وَهُوَ الضعيف كلمح خاطرةٍ
تُطِلُّ على أَصابعنا
ونكتبها سُدَى...
وهو الكثيف كبيت شِعْرٍ لا يُدَوَّنُ
بالحروف /
لوصف زهر اللوز تَلْزُمني زيارات إلى
اللاوعي تُرْشِدُني إلى أَسماء عاطفةٍ
مُعَلَّقةٍ على الأشجار. ما اُسُمهْ؟
ما اسم هذا الشيء في شعريَّة اللاشيء ؟
يلزمني اختراقُ الجاذبيِة والكلام ،
لكي أحِسَّ بخفة الكلمات حين تصير
طيفاً هامساً، فأكونها وتكونني
شفّافَةً بيضاءَ /

لا وَطَنٌ ولا منفى هِيَ الكلماتُ،
بل وَلَعُ البياض بوصف زهر اللوز /
لا ثَلْجٌ ولا قُطْنٌ / فما هُوَ في
تعاليهِ على الأشياء والأسماء
لو نجح المؤلِّفُ في كتابة مقطعٍ
في وصف زهر اللوز، لانحسر الضبابُ
عن التلال، وقال شَعْبٌ كاملٌ:
هذا هُوَ /
هذا كلامُ نشيدنا الوطنّي!`,
    sideBySideExcerpt: true,
    notes: "",
  },
  {
    id: "mona-saudi-alhajar-jawhar-al-kalam",
    titleAr: "الحجر جوهر الكلام",
    titleEn: "Stone, the Essence of Language",
    poetAr: "منى السعودي",
    poetEn: "Mona Saudi",
    listingExcerptAr:
      "– لماذا هذا النشيد الحجري؟\n– لأن العالم يبقى مبعثراً حتى يجمعه التمثال،",
    listingExcerptEn:
      "– Why this song of stone?\n– Because the world remains scattered until it is united by statues, and the universe does not complete and renew except through it,",
    translationBody: `– Why this song of stone?
– Because the world remains scattered until it is united by statues, and the universe does not complete and renew except through it, and because it is the body and the secret, which is touched and remains far from touch, which is seen and is not encompassed by the eye. It is the change and movement in stability. It is the body of a poem that was not yet written by a poet, or the poem that all poets dream of writing.
Presence in time and place, in the eye and in the dream.
The statue is the embodiment of the action, the meeting of will and dream and conviction, the meeting of the hand of the laborer and creative, not a luxury and not an illusion. In sculpture, creativity is made real through matter. The sculptor grants it a soul and a life and a form, he becomes a creator. The statue, in the past, was a god and talisman, and it was a body of the soul that did not cease: the statue was a challenge to death and a refusal of it, certainty of permanence and the capability of humans.
The city in which statues do not reside is a dead city, chatter, and when the stones awaken it is a sign that the tree of the creative dream indeed has begun to grow in our world, extending its branches in the spaces of our life, to announce its repletion and its strength and its revival.`,
    originalExcerpt: "",
    sideBySideExcerpt: true,
    notes: "",
  },
  {
    id: "darwish-madih-sabra-shatila",
    titleAr: "مديح الظل العالي",
    titleEn: "In Praise of High Shadow",
    poetAr: "محمود درويش",
    poetEn: "Mahmoud Darwish",
    listingExcerptAr: "صبرا – فتاةٌ نائمة\nرحل الرجالُ إلى الرحيل",
    listingExcerptEn:
      "Sabra – sleeping girl\nthe men departed toward departure",
    translationBody: `Sabra – sleeping girl
the men departed toward departure
and the war slept for two short nights,
and Beirut submitted its obedience and became the capital..
a long night
observing the dreams in Sabra,
and Sabra – sleeping.
Sabra – remains of the hand in the slain body
she bid farewell to her knights and her time
and surrendered to sleep, from fatigue, and from the Arabs who threw her behind them.
Sabra – and what the departed soldiers forgot from Galilee
she doesn't buy or sell anything except her silence,
for the sake of flowers for braids,
Sabra – she sings her lost half between the sea and the final war:
why do you leave
and leave your women in the stomach of an iron night?
why do you leave
and hand your evenings
above the camp and the anthem?
Sabra – she covers her bare chest with a song of farewell
and considers her hand and errs
when she does not find the arm:
how many times will you all travel
and until when will you all travel
and to which dream?
and if you all return one day
for which exile are you returning,
which exile are you returning for?
Sabra – she tears her exposed chest:
how many times
does the flower bloom
how many times
will the revolution travel?
Sabra – she fears the night. she rests it against her knee
covers it with the kohl of her eyes. cries to distract it:
they left and did not say
anything on the return
they wilted and did not turn
to the embers of the flower!
they returned and did not return
to the beginning of their journey
and age is children
fleeing from the kiss.
no, i have no exile
to say: i have a homeland
God, oh time..!
Sabra – sleeping. and the dagger of the fascist wakes
Sabra calls.. who she calls
all of this night is mine, and the night is salt
the fascist cuts her breasts – the night shrinks –
he dances around his dagger and licks it. he sings a mawwal to the cedar victory,
and erases
in stillness.. in stillness the flesh from her bone
and he spreads the organs atop of the table
and the fascist continues his dances and he laughs at the tilted eyes
and goes crazy from joy and Sabra is no longer a body:
he mounts her as his instincts desire, and recreates her to his will
and he steals a ring from her flesh, and he returns from her blood to his mirror
and becomes – sea
and becomes – land
and becomes – clouds
and becomes – blood
and becomes – night
and becomes – killing
and becomes – saturday
and she becomes – Sabra.
Sabra – the intersection of two streets on a body
Sabra – the descent of the soul in stone
Sabra – no one
Sabra – the identity of our age forever..`,
    originalExcerpt: `صبرا – فتاةٌ نائمة
رحل الرجالُ إلى الرحيل
والحرب نامت ليلتين صغيرتين،
وقدّمت بيروت طاعتها وصارت عاصمة…. ليلٌ طويل
يرصد الأحلام في صبرا، وصبرا نائمة
صبرا – بقايا الكفّ في جسدٍ قتيل
ودّعت فرسانها وزمانها
واستسلمت للنوم من تعب، ومن العرب رموها خلفهم
صبرا – وما ينسى الجنود الراحلون من الجليل
لا تشتري وتبيع إلا صمتها
من أجل وردٍ للضفيرة
صبرا تغني نصفها المفقود بين البحر والحرب الأخيرة:
لمَ ترحلون
وتتركون نساءكم في بطن ليلٍ من حديد؟
لمَ ترحلون
وتعلّقون مساءكم
فوق المخيم والنشيد؟
صبرا تغطي صدرها العاري بأغنية الوداع
وتعد كفّيها وتخطئ
حين لا تجد الذراع:
كم مرةً ستسافرون
وإلى متى ستسافرون
وإلى أيّ حلم؟
وإذا رجعتم يوماً
فلأيّ منفى ترجعون،
لأيّ منفى ترجعون؟
صبرا – تمزّق صدرها المكشوف:
كم مرّة
تتفتّح الزهرة
كم مرّة
ستسافر الثورة؟
صبرا تخاف الليل. تسنده لركبتها
تغطيه بكحل عيونها. تبكي لتلهيه:
رحلوا وما قالوا
شيئاً عن العودة
ذبلوا وما مالوا
إلى جمرة الورد!
عادوا وما عادوا
إلى بداية الرحلة
والعمر أولادٌ
هربوا من القبلة.
لا، ليس لي منفى
لأقول: لي وطن
الله، يا زمن…!
صبرا تنام. وخنجر الفاشي يصحو
صبرا تنادي… من تنادي
كلّ هذا الليل لي، والليل ملح
يقطع الفاشي ثدييها – يقلّ الليل –
يرقص حول خنجره ويلعقه. يغني موالاً لانتصار الأرز،
ويمحو
في هدوء… في هدوء لحمها عن عظمها
ويمدّد الأعضاء فوق الطاولة
ويواصل الفاشي رقصه ويضحك للعيون المائلة
ويجنّ من فرح وصبرا لم تعد جسداً:
يركّبها كما شاءت غرائزه، ويصنعها مشيئته
ويسرق خاتماً من لحمها، ويعود من دمها إلى مرآته
ويكون – بحراً
ويكون – برّاً
ويكون – غيماً
ويكون – دماً
ويكون – ليلاً
ويكون – قتلاً
ويكون – سبتاً
وتكون – صبرا.
صبرا – تقاطع شارعين على جسد
صبرا – نزول الروح في حجر
صبرا – لا أحد
صبرا هوية عصرنا حتى الأبد…`,
    sideBySideExcerpt: true,
    notes: "Excerpt: Sabra and Shatila passage.",
  },
  {
    id: "samir-sayegh-revelation-from-the-bow",
    titleAr: "وحي من جهة القوس",
    titleEn: "Revelation from the direction of the bow",
    poetAr: "سمير صايغ",
    poetEn: "Samir Sayegh",
    listingExcerptAr:
      "يتساوى الوجهان، والأرض كانت مرآة\nنعم",
    listingExcerptEn:
      "The two faces become equal, and the earth was a mirror\nYes",
    translationBody: `— 1 —
The two faces become equal, and the earth was a mirror
Yes
The rock a mirror, and the plants a mirror and the city a mirror
And the mirror must break for the face to show
(He is calmed by walking on paths where the sides fall off
and birds join him while he begins the walk)
Question: How do you begin?
You see yourself in the river, and the water around you is clouds
and a fire leads the steps to its orbit
And how is it that the morning trip
between the breaking of your days and revelation of drawings for the days to be born?
Answer:
I remember a beginning that was not.
I am not in the center of the water, and the well is missing
It had a face that isn't depicted now
That is how it began
I grew upon a beginning that died
And I remember how it was born, I gave birth to it and the birth
at the edges of its death
(A death that separates death from death
a death that connects the center to the edges)
Question: how do you leave the garden?
How did you leave when you were not in the shape of a rose?
Answer: I was scattered
I came to listen, searching for my voice among the cure
and for my face in the face I saw in its mirror
— 2 —
It comes lightly like a bird, and fades lightly like a dream, slipping
between the lines and over the papers of letters.
A name easily written on the necks of branches and drawn
on the forehead.
It hides in words, it flows like water, and departs like
morning departs and sleeps like memories sleep
A voice we don’t hear and a face we don’t see
And we write its name and it does not hear us and we draw its face and it does not see
Suddenly we heard its call:
It resembles us,
Its boundaries begin within us, and its boundaries end within us. It wears our voice
and sees with our eyes.
Near without distance and far without distance
We are its mirror and it is our mirror.
— 3 —
Longing takes shape as a tomb not through forgetting.
A wave advances, loving the repose of sand in formation
Forgetting the shapes of its separation:
It was rock, it was stone, it was water.
A cry,
A sudden lapse, cutting what is connected
The eye forgets what it saw
What it named in order to remember it in a mirror that was a witness to the birth of the eye
(It moves between the edges of the heart and it is in the orbit of choice)
Night
And you find yourself before yourself gazing at your death
(The image of the tomb is not yet completed:
The scattering in the air
The inclination for soil of evening and darkness
The surrendering to the dampness of birth
The tranquility, and the black stillness
Your forgetfulness grows
A piercing scream
Love has not yet been drawn on pages of the body.)
You are surprised
That ahead of your death you enter its first passage
Thresholds attracting steps
And go on to lure them into slipping.
You are surprised
That you proceed in numbness, and pleasure rising toward bitterness
You awaken.`,
    originalExcerpt: "",
    sideBySideExcerpt: true,
    notes: "",
  },
];

export function getTranslationById(id) {
  return translationWorks.find((w) => w.id === id);
}

export function isTranslationComplete(work) {
  return Boolean(work.translationBody && String(work.translationBody).trim());
}
