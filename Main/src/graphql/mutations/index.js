import { gql } from '@apollo/client';

export const updateGuildPrefixMutation = gql`
  mutation UpdateGuildPrefix($guildId: String!, $prefix: String) {
      updateGuildPrefix(guildId: $guildId, prefix: $prefix) {
          prefix
          guildId
      }
  }
`;

export const updateNewsChannelMutation = gql`
  mutation UpdateNewsChannel($guildId: String!, $newsChannel: String) {
      updateNewsChannel(guildId: $guildId, newsChannel: $newsChannel) {
          newsChannel
          guildId
      }
  }
`;

export const updateCustomCommandInfoMutation = gql`
  mutation UpdateCustomCommandInfo($guildId: String!, $customCommandInfo: String) {
      updateCustomCommandInfo(guildId: $guildId, customCommandInfo: $customCommandInfo) {
          customCommandInfo
          guildId
      }
  }
`; 

export const updateCustomCommandReplyMutation = gql`
  mutation UpdateCustomCommandReply($guildId: String!, $customCommandReply: String) {
      updateCustomCommandReply(guildId: $guildId, customCommandReply: $customCommandReply) {
          customCommandReply
          guildId
      }
  }
`;

export const updateOnlyFreeGamesMutation = gql`
  mutation UpdateOnlyFreeGames($guildId: String!, $onlyFreeGames: Boolean!) {
    updateOnlyFreeGames(guildId: $guildId, onlyFreeGames: $onlyFreeGames) {
          onlyFreeGames
          guildId
      }
  }
`;

export const deleteNewsChannelMutation = gql`
  mutation DeleteNewsChannel($guildId: String!) {
      deleteNewsChannel(guildId: $guildId) {
          guildId
      }
  }
`;

export const updateNewsSettingOnMutation = gql`
  mutation UpdateNewsSettingOn($guildId: String!, $newsSettingOn: Boolean!) {
    updateNewsSettingOn(guildId: $guildId, newsSettingOn: $newsSettingOn) {
      guildId
      newsSettingOn
    }
  }
`;

export const automatedModMutation = gql`
  mutation UpdateAutoModSettings($guildId: String!, $guildAutoModeration: Boolean, $guildRules: String, $guildModerationTitle: String, $guildModerationAction: String, $guildModerationReason: String, $guildModerationColor: String, $guildModChannel: String) {
    updateAutoModSettings(guildId: $guildId, guildAutoModeration: $guildAutoModeration, guildRules: $guildRules, guildModerationTitle: $guildModerationTitle, guildModerationAction: $guildModerationAction, guildModerationReason: $guildModerationReason, guildModerationColor: $guildModerationColor, guildModChannel: $guildModChannel) {
      guildId
      guildAutoModeration
      guildModChannel
      guildModerationAction
      guildModerationColor
      guildModerationReason
      guildModerationTitle
      guildRules
    }
  }
`;

export const updateTwitchTVSettingsMutation = gql`
    mutation UpdateTwitchTVSettings($guildId: String!, $twitchNick: String, $messageToSend: String, $twitchChannelId: String, $twitchActive: Boolean!) {
      updateTwitchTVSettings(guildId: $guildId, twitchNick: $twitchNick, messageToSend: $messageToSend, twitchActive: $twitchActive, twitchChannelId: $twitchChannelId) {
        guildId
        twitchNick
        messageToSend
        twitchChannelId
        twitchActive
      }
    }
`;

export const updateCustomCommandMutation = gql`
    mutation UpdateCustomCommand($method: String!, $commandId: String, $guildId: String, $name: String, $reply: String, $embed: Boolean!) {
      updateCustomCommand(method: $method, commandId: $commandId, guildId: $guildId, name: $name, reply: $reply, embed: $embed) {
        method
        commandId
        guildId
        name
        reply
        embed
      }
    }
`;