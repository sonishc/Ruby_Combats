const BLOCK_TYPES = ['head_block', 'chest_block', 'stomach_block',
                'lower_back_block','belt_block','legs_block'];

const HIT_TYPES = ['head', 'chest', 'stomach',
              'lower_back','belt','legs'];

const USER_AVATAR_URL = "/assets/user-photo.gif";
const BOT_AVATAR_URL = "/assets/bot1.gif";

const HITS_ANIMATIONS_URL = {
  idle: "/assets/hit-static.gif",
  hit: "/assets/hit-1.gif",
  hitReversed: "/assets/hit-2.gif"
};
const LOGS = {
  idle: "Let's Fight",
  botLog: "Bot hit",
  userLog: "User hit"
}
let USER_DAMAGE = 30;
let BOT_DAMAGE = 30;
const ARMOR_MULTIPLIER = 0.2;
const EFFECTS = {
  HEALING: 1,
}
