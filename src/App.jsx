import {
  Check,
  ChevronRight,
  Citrus,
  GlassWater,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { brand, cocktails, navLinks, services } from './data/brand';

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, ease: 'easeOut' },
};

function whatsappUrl(message = brand.whatsappMessage) {
  return `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function Logo({ className = '' }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {!failed ? (
        <img
          src={brand.logo}
          onError={() => setFailed(true)}
          alt={`${brand.name} logo`}
          className="h-11 w-11 rounded-full border border-slate-200 object-contain bg-white p-1"
        />
      ) : (
        <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-citrus via-berry to-purple font-display text-lg font-bold text-night">
          LB
        </div>
      )}
      <div>
        <span className="block font-display text-lg font-bold leading-none text-night">{brand.fallbackLogoText}</span>
        <span className="mt-1 block text-[0.68rem] uppercase tracking-[0.22em] text-slate-500">Lebanon</span>
      </div>
    </div>
  );
}

function AgeGate() {
  const [status, setStatus] = useState(() => localStorage.getItem('lazy-bartender-age-ok') === 'true' ? 'accepted' : 'pending');

  if (status === 'accepted') return null;

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-white/95 px-5 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md rounded-[2rem] border border-slate-200 bg-white p-7 text-center shadow-xl shadow-slate-300/50"
      >
        <Logo className="justify-center" />
        <div className="mx-auto my-6 grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-gold/30 to-berry/30 text-gold">
          <ShieldCheck size={30} />
        </div>
        <h1 className="font-display text-3xl font-bold text-night">Are you of legal drinking age?</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Alcoholic beverages are intended only for people of legal drinking age. Please drink responsibly.
        </p>
        {status === 'denied' && (
          <p className="mt-5 rounded-2xl border border-berry/30 bg-berry/10 px-4 py-3 text-sm text-night">
            You must be of legal drinking age to enter this website.
          </p>
        )}
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <button
            className="rounded-full bg-gradient-to-r from-citrus via-berry to-purple px-5 py-3 font-bold text-night shadow-citrus transition hover:scale-[1.02]"
            onClick={() => {
              localStorage.setItem('lazy-bartender-age-ok', 'true');
              setStatus('accepted');
            }}
          >
            Yes, Enter
          </button>
          <button
            className="rounded-full border border-slate-200 px-5 py-3 font-bold text-night transition hover:bg-slate-100"
            onClick={() => setStatus('denied')}
          >
            No, Exit
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/85 shadow-sm shadow-slate-200/70 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" aria-label="Lazy Bartender home">
          <Logo />
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map(([label, id]) => (
            <a key={id} className="text-sm font-semibold text-slate-600 transition hover:text-night" href={`#${id}`}>
              {label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <a className="btn-primary" href={whatsappUrl()} target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> Order on WhatsApp
          </a>
        </div>
        <button
          aria-label="Open menu"
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-night lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white/95 p-5 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button aria-label="Close menu" className="icon-button" onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>
            <div className="mt-10 grid gap-3">
              {navLinks.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-lg font-bold text-night shadow-sm"
                >
                  {label}
                </a>
              ))}
              <a className="btn-primary mt-3 justify-center" href={whatsappUrl()} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Order on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const badges = ['Fresh Ingredients', 'Online Orders', 'Ready-to-Drink Cocktails', 'Lebanon Pickup / Delivery'];

  return (
    <section id="home" className="hero-shell relative min-h-screen overflow-hidden pt-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 lg:grid-cols-[1fr_0.94fr] lg:px-8 lg:pt-24">
        <motion.div {...fadeUp}>
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-bold text-night shadow-sm">
            <Sparkles size={16} className="text-gold" /> Premium alcoholic cocktails ordered online in Lebanon
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[0.95] text-night sm:text-6xl lg:text-7xl">
            Fresh Cocktails. Premium Vibes. Ordered Online.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            Ready-to-drink alcoholic cocktails made fresh to order, with colorful flavors, premium presentation, and easy
            WhatsApp ordering across Lebanon.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary justify-center" href={whatsappUrl()} target="_blank" rel="noreferrer">
              <MessageCircle size={19} /> Order on WhatsApp
            </a>
            <a className="btn-secondary justify-center" href="#cocktails">
              View Cocktail Menu <ChevronRight size={18} />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span key={badge} className="rounded-full border border-slate-200 bg-white/75 px-4 py-2 text-sm text-slate-700 shadow-sm">
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: 1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-lime/25 blur-3xl" />
          <div className="absolute -right-4 bottom-16 h-40 w-40 rounded-full bg-berry/25 blur-3xl" />
          <div className="glass-panel overflow-hidden p-3">
            <img
              src="/cocktail-hero.png"
              alt="Premium colorful cocktails with citrus garnish and nightlife bar lighting"
              className="aspect-[4/5] w-full rounded-[1.6rem] object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
            />
          </div>
          <div className="absolute -bottom-7 left-5 right-5 rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-xl shadow-slate-200/70 backdrop-blur-xl">
            <Logo />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, copy }) {
  return (
    <motion.div {...fadeUp} className="mx-auto mb-12 max-w-3xl text-center">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {copy && <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{copy}</p>}
    </motion.div>
  );
}

function ProductModal({ product, onClose }) {
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [quantity, setQuantity] = useState(1);
  const [codOrder, setCodOrder] = useState(null);

  useEffect(() => {
    if (!product) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const orderMessage = `Hello, I want to order ${quantity} x ${product.name}. Payment: ${paymentMethod === 'cod' ? 'Cash on Delivery' : 'WhatsApp confirmation'}. Can you confirm availability and price?`;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[90] overflow-y-auto bg-night/35 px-4 py-6 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="mx-auto my-8 max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-500/20"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div
              className={`relative min-h-72 bg-gradient-to-br ${product.accent} bg-cover bg-center p-6`}
              style={{ backgroundImage: `linear-gradient(135deg, rgba(255,255,255,.3), rgba(255,255,255,.58)), url(${product.image})` }}
            >
              <button
                type="button"
                aria-label="Close product details"
                className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/85 text-night shadow-sm"
                onClick={onClose}
              >
                <X size={20} />
              </button>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(255,255,255,0.52),transparent_24%),radial-gradient(circle_at_68%_74%,rgba(255,255,255,0.28),transparent_20%)]" />
              <div className="relative flex h-full min-h-72 flex-col justify-end">
                <div
                  className="mb-5 grid h-24 w-24 place-items-center overflow-hidden rounded-3xl border border-white/60 bg-cover bg-center shadow-lg"
                  style={{ backgroundImage: `url(${product.image})` }}
                >
                  <div className="grid h-full w-full place-items-center bg-white/45 backdrop-blur-[1px]">
                    <GlassWater className="h-12 w-12 text-night/75" />
                  </div>
                </div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-night/65">{product.flavor}</p>
                <h3 id="product-modal-title" className="mt-3 font-display text-5xl font-extrabold leading-tight text-night">
                  {product.name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-lg leading-8 text-slate-700">{product.desc}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Size</p>
                  <p className="mt-2 font-bold text-night">{product.size}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Garnish</p>
                  <p className="mt-2 font-bold text-night">{product.garnish}</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">Ingredients</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient) => (
                    <span key={ingredient} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700">
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
                <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
                  <label className="grid gap-2 text-sm font-bold text-night">
                    Quantity
                    <input
                      className="field"
                      min="1"
                      type="number"
                      value={quantity}
                      onChange={(event) => setQuantity(Math.max(1, Number(event.target.value) || 1))}
                    />
                  </label>
                  <a className="btn-primary justify-center" href={whatsappUrl(orderMessage)} target="_blank" rel="noreferrer">
                    <MessageCircle size={18} /> Order on WhatsApp
                  </a>
                </div>
              </div>

              <form
                className="mt-5 grid gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  const form = new FormData(event.currentTarget);
                  setCodOrder({
                    name: form.get('customerName'),
                    phone: form.get('customerPhone'),
                    area: form.get('deliveryArea'),
                    quantity,
                    product: product.name,
                  });
                }}
              >
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-night">Cash on Delivery</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Submit your details and Lazy Bartender will confirm price, availability, and delivery timing.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input className="field" name="customerName" placeholder="Full name" required />
                  <input className="field" name="customerPhone" placeholder="Phone number" required />
                </div>
                <input className="field" name="deliveryArea" placeholder="Delivery area / address" required />
                <textarea className="field min-h-24 resize-y" name="notes" placeholder="Notes, preferred delivery time, or customization requests" />
                <label className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                  <input
                    checked={paymentMethod === 'cod'}
                    className="h-4 w-4 accent-berry"
                    onChange={() => setPaymentMethod('cod')}
                    type="checkbox"
                  />
                  Pay with Cash on Delivery
                </label>
                <button className="btn-secondary justify-center" type="submit">
                  <Send size={18} /> Place COD Order
                </button>
                {codOrder && (
                  <div className="rounded-2xl border border-lime/40 bg-lime/15 p-4 text-sm leading-6 text-night">
                    COD request received for {codOrder.quantity} x {codOrder.product}. We will contact {codOrder.name} at {codOrder.phone} to confirm delivery to {codOrder.area}.
                  </div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function FeaturedCocktails() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="cocktails" className="section-pad">
      <SectionIntro
        eyebrow="Cocktail Menu"
        title="Colorful classics, polished for your crowd."
        copy="Every order can be customized by flavor profile, preferred spirits, garnish style, and quantity."
      />
      <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {cocktails.map((item) => (
          <motion.article
            key={item.name}
            {...fadeUp}
            className="card group cursor-pointer"
            onClick={() => setSelectedProduct(item)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setSelectedProduct(item);
              }
            }}
            role="button"
            tabIndex={0}
          >
            <div className={`mb-5 h-2 w-20 rounded-full bg-gradient-to-r ${item.accent}`} />
            <div
              className="grid h-20 w-20 place-items-center overflow-hidden rounded-3xl border border-slate-200 bg-cover bg-center shadow-md shadow-slate-200/70 transition group-hover:scale-105"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="grid h-full w-full place-items-center bg-white/50 backdrop-blur-[1px]">
                <GlassWater className="text-purple transition group-hover:text-gold" />
              </div>
            </div>
            <h3 className="mt-5 text-xl font-extrabold text-night">{item.name}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-gold">{item.flavor}</p>
            <button
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-purple"
              type="button"
            >
              View details <ChevronRight size={16} />
            </button>
          </motion.article>
        ))}
      </div>
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-pad bg-gradient-to-br from-citrus/10 via-white to-ice/20">
      <SectionIntro
        eyebrow="What We Offer"
        title="Online cocktail orders, prepared fresh."
        copy="Lazy Bartender is a cocktail retailer: browse the menu, ask for availability and prices, then place your order through WhatsApp."
      />
      <div className="mx-auto grid max-w-7xl gap-4 px-5 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {services.map(([title, text], index) => (
          <motion.div key={title} {...fadeUp} className="card flex gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-citrus/25 to-berry/25 text-gold">
              {index % 2 === 0 ? <Citrus /> : <Sparkles />}
            </div>
            <div>
              <h3 className="font-bold text-night">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const points = [
    'Fresh ingredients',
    'Stylish cocktail presentation',
    'Custom options for each order',
    'Fast WhatsApp communication',
    'Pickup or delivery coordination',
    'Premium taste and visual presentation',
  ];

  return (
    <section className="section-pad bg-gradient-to-br from-white via-berry/5 to-lime/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <motion.div {...fadeUp}>
          <p className="section-eyebrow text-left">Why Choose Us</p>
          <h2 className="section-title text-left">A polished cocktail experience without the stress.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            We make ordering premium cocktails simple, stylish, and fast, with fresh preparation and clear WhatsApp
            communication before every order.
          </p>
        </motion.div>
        <div className="grid gap-3 sm:grid-cols-2">
          {points.map((point) => (
            <motion.div key={point} {...fadeUp} className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-sm">
              <Check className="text-lime" /> <span className="font-bold text-night">{point}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  // Replace these gradient placeholders with real cocktail product photos when available.
  const gallery = [
    ['Cocktail service', 'from-citrus via-berry to-purple'],
    ['Bar setup', 'from-ice via-purple to-berry'],
    ['Fruit garnish', 'from-lime via-citrus to-gold'],
    ['Online orders', 'from-purple via-berry to-citrus'],
    ['Party drinks', 'from-ice via-lime to-citrus'],
  ];

  return (
    <section className="section-pad">
      <SectionIntro
        eyebrow="Gallery"
        title="Replaceable visuals for cocktails, setup, and party mood."
        copy="Drop real product photos into the gallery later; the layout is ready for premium cocktail photography."
      />
      <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        {gallery.map(([label, gradient], index) => (
          <motion.figure key={label} {...fadeUp} className={`gallery-tile ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-75`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.38),transparent_22%),radial-gradient(circle_at_70%_68%,rgba(255,255,255,0.22),transparent_18%)]" />
            <figcaption className="relative mt-auto rounded-full bg-white/85 px-4 py-2 font-bold text-night shadow-sm">{label}</figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-pad bg-gradient-to-br from-ice/15 via-white to-citrus/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <motion.div {...fadeUp}>
          <p className="section-eyebrow text-left">About Us</p>
          <h2 className="section-title text-left">Lebanon-based cocktails prepared fresh for online orders.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            We prepare fresh, colorful, and premium alcoholic cocktails for customers across Lebanon. Choose from the
            menu, ask for available quantities and prices, and order directly online through WhatsApp.
          </p>
        </motion.div>
        <motion.div {...fadeUp} className="glass-panel p-7">
          <Logo />
          <div className="mt-7 grid gap-4">
            {['Online ordering', 'Fresh preparation', 'Custom flavor options', 'Premium presentation'].map((item) => (
              <div key={item} className="flex items-center gap-3 text-slate-700">
                <Sparkles className="text-gold" /> {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const orderTypes = ['Individual Cocktails', 'Mixed Box', 'Bottle / Batch Order', 'Custom Flavor Request', 'Gift Order'];

  return (
    <section id="contact" className="section-pad">
      <SectionIntro
        eyebrow="Book Now"
        title="Place your cocktail order."
        copy="Send your order details, or message us directly on WhatsApp for the latest menu, availability, and prices."
      />
      <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <motion.div {...fadeUp} className="card">
          <a className="btn-primary w-full justify-center" href={whatsappUrl()} target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> Order on WhatsApp
          </a>
          <div className="mt-7 space-y-5 text-slate-700">
            <p className="flex items-center gap-3"><Phone className="text-gold" /> {brand.phone}</p>
            <p className="flex items-center gap-3"><Sparkles className="text-berry" /> <a href={brand.instagramUrl} target="_blank" rel="noreferrer">Instagram</a></p>
            <p className="flex items-center gap-3"><MapPin className="text-ice" /> {brand.location}</p>
          </div>
          <p className="mt-8 rounded-3xl border border-gold/30 bg-gold/15 p-4 text-sm leading-6 text-slate-700">
            Please drink responsibly. Service and alcoholic beverages are only for people of legal drinking age.
          </p>
        </motion.div>
        <motion.form
          {...fadeUp}
          className="card grid gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            const form = new FormData(event.currentTarget);
            const message = `Hello, I want to order cocktails.
Name: ${form.get('name')}
Phone: ${form.get('phone')}
Order type: ${form.get('orderType')}
Needed date: ${form.get('date')}
Quantity: ${form.get('quantity')}
Message: ${form.get('message')}`;
            window.open(`https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
          }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input className="field" name="name" placeholder="Name" required />
            <input className="field" name="phone" placeholder="Phone number" required />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <select className="field" name="orderType" defaultValue="Individual Cocktails">
              {orderTypes.map((type) => <option key={type}>{type}</option>)}
            </select>
            <input className="field" name="date" type="date" aria-label="Needed date" />
            <input className="field" name="quantity" type="number" min="1" placeholder="Quantity" />
          </div>
          <textarea className="field min-h-36 resize-y" name="message" placeholder="Tell us which cocktails you want, quantity, pickup or delivery area, and any flavor preferences." />
          <button className="btn-primary justify-center" type="submit">
            <Send size={18} /> Send Order Request
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
            Premium alcoholic cocktails sold online by order, prepared fresh with colorful flavors and polished
            presentation across Lebanon.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-night">Quick Links</h3>
          <div className="mt-4 grid gap-2">
            {navLinks.map(([label, id]) => <a key={id} className="text-sm text-slate-600 hover:text-night" href={`#${id}`}>{label}</a>)}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-night">Contact</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-600">
            <span>{brand.phone}</span>
            <span>{brand.location}</span>
            <a href={brand.instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-xs leading-6 text-slate-500">
        Please drink responsibly. Alcoholic beverages are intended only for people of legal drinking age.
      </p>
    </footer>
  );
}

export default function App() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      <AgeGate />
      <Header />
      <main>
        <Hero />
        <FeaturedCocktails />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
      <div className="sr-only">Copyright {year} {brand.name}</div>
    </>
  );
}
