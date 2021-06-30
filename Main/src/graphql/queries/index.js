import { gql } from '@apollo/client';

export const menuPageQuery = gql`
  query getMenuPageQuery {
      getUser {
          discordId
          discordTag
          avatar
      }
      getMutualGuilds {
          included {
              name
              id
              icon
          }
          excluded {
              name
              id
              icon
          }
      }
  }
`;

export const dashboardPageQuery = gql`
  query getDashboardPageData($guildId: String!) {
      getCommands(guildId: $guildId) {
          commandId
          guildId
          name
          reply
          embed
      }
      getUser {
          discordId
          discordTag
          avatar
      }
      getGuildConfig(guildId: $guildId) {
          icon
          name
          prefix
          guildId
          newsChannel
          memberLogChannel
          customCommandInfo
          customCommandReply
          onlyFreeGames
          newsSettingOn
          premium
      }
      getGuildChannels(guildId: $guildId) {
          id
          name
          type
          nsfw
      }
      getMutualGuilds {
        included {
            name
            id
            icon
        }
        excluded {
            name
            id
            icon
        }
    }
    getAutoModSettings(guildId: $guildId) {
        guildId
        guildAutoModeration
        guildRules
        guildModerationTitle
        guildModerationAction
        guildModerationReason
        guildModerationColor
        guildModChannel
    }
    getTwitchTVSettings(guildId: $guildId) {
        guildId
        twitchNick
        messageToSend
        twitchChannelId
        twitchActive
    }
  }
`;