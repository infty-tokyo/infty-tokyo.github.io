export const GA_TRACKING_ID = "G-0PRZGNEZTK";

export const existsGaId = GA_TRACKING_ID !== "";

export const pageview = (path: string): void => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: path,
  });
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (!GA_TRACKING_ID) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  });
};
