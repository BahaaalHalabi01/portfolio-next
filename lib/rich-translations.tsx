import { type RichTranslationValues } from "next-intl";

export function getDefaultTranslationValues(): RichTranslationValues {
  return {
    theo: (chunk) => (
      <a
        className="text-primary text-2xl"
        href="https://t3.gg/"
        target="_blank"
        rel="noreferrer"
      >
        {chunk}
      </a>
    ),
    prime: (chunk) => (
      <a
        className="text-primary text-2xl"
        href="https://www.twitch.tv/theprimeagen"
        target="_blank"
        rel="noreferrer"
      >
        {chunk}
      </a>
    ),
    strong: (chunks) => <strong>{chunks}</strong>,
  } as RichTranslationValues;
}
