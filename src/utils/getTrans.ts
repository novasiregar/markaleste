import en from "../../public/lang/en";
import id from "../../public/lang/id";
import { NC_SITE_SETTINGS } from '@/contains/site-settings';

const getTrans = () => {
  const language = NC_SITE_SETTINGS?.general_settings?.language || 'en';
  const trans = language === 'id' ? id : en;

  return trans;
};

export default getTrans;
