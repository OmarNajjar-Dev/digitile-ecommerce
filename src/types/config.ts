export interface RestaurantConfig {
  status: number;
  response: {
    company_id: number;
    restaurant_name: string;
    restaurant_name_ar: string;
    has_daily_dish: boolean;
    has_event: boolean;
    has_branches: boolean;
    fallback_image: string;
    fallback_image_path: string;
    restaurant_address: string;
    restaurant_address_ar: string;
    other_addresses: string[];
    restaurant_phone: string;
    restaurant_email: string;
    currency_symbol: string;
    currency_symbol_en: string;
    currency_id: number;
    currency_list: {
      currency_symbol: string;
      currency_symbol_en: string;
      currency_id: number;
    }[];
    restaurant_logo: string;
    restaurant_logo_light: string;
    restaurant_favicon: string;
    restaurant_schedule_time: {
      day_name: string;
      day: number;
      opening_closing_time: {
        opening_time: string;
        closing_time: string;
      }[];
    }[];
    social_media_link: {
      twitter: string;
      facebook: string;
      gitHub: string;
      linkedIn: string;
      youtube: string;
      instagram: string;
      whatsapp: string;
    };
    company_banners: {
      category_section_name: string;
      category_section_name_ar: string;
      category_title: string;
      category_title_ar: string;
      category_banner: string;
      menu_background: string;
      cart_title: string;
      cart_title_ar: string;
      cart_banner: string;
      checkout_title: string;
      checkout_title_ar: string;
      checkout_banner: string;
      faq_banner: string;
      career_banner: string;
      deal_title1: string;
      deal_title1_ar: string;
      deal_title2: string;
      deal_title2_ar: string;
      deal_banner: string;
      deal_background: string;
      promotion_title: string;
      promotion_title_ar: string;
      promotion_banner: string;
      footer_banner: string;
    }[];
    "sign-in-up-banner": string;
    tva_enable: boolean;
    has_delivery: boolean;
    has_pickup: boolean;
    has_third_party_delivery: boolean;
    has_by_pass_kitchen: boolean;
    system_delivery: boolean;
    longitude: number;
    latitude: number;
    url_app_store: string;
    url_play_store: string;
    splash_background_for_mobile_app: string;
    restaurant_loader_for_web_app: string;
  };
  message: string;
}
