/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type AddLogData = ApiResult;

export type AddOrModifyAlarmData = ApiResultVoid;

export interface ApiResult {
  /** @format int32 */
  code?: number;
  data?: object;
  message?: string;
}

export interface ApiResultAppVersionView {
  /** @format int32 */
  code?: number;
  data?: AppVersionView;
  message?: string;
}

export interface ApiResultCryptoAdvertiseAlarmAuditView {
  /** @format int32 */
  code?: number;
  data?: CryptoAdvertiseAlarmAuditView;
  message?: string;
}

export interface ApiResultCryptoAlarmView {
  /** @format int32 */
  code?: number;
  data?: CryptoAlarmView;
  message?: string;
}

export interface ApiResultCryptoAppPointView {
  /** @format int32 */
  code?: number;
  data?: CryptoAppPointView;
  message?: string;
}

export interface ApiResultDouble {
  /** @format int32 */
  code?: number;
  /** @format double */
  data?: number;
  message?: string;
}

export interface ApiResultListCryptoAlarmTypeView {
  /** @format int32 */
  code?: number;
  data?: CryptoAlarmTypeView[];
  message?: string;
}

export interface ApiResultListCryptoAlarmView {
  /** @format int32 */
  code?: number;
  data?: CryptoAlarmView[];
  message?: string;
}

export interface ApiResultListCryptoAppPointHistoryView {
  /** @format int32 */
  code?: number;
  data?: CryptoAppPointHistoryView[];
  message?: string;
}

export interface ApiResultListCurrencyTradeView {
  /** @format int32 */
  code?: number;
  data?: CurrencyTradeView[];
  message?: string;
}

export interface ApiResultListCurrencyView {
  /** @format int32 */
  code?: number;
  data?: CurrencyView[];
  message?: string;
}

export interface ApiResultListUserRequestView {
  /** @format int32 */
  code?: number;
  data?: UserRequestView[];
  message?: string;
}

export interface ApiResultMapStringInAppPurchaseView {
  /** @format int32 */
  code?: number;
  data?: Record<string, InAppPurchaseView>;
  message?: string;
}

export interface ApiResultMapTermsOfUseTypeTermsOfUseView {
  /** @format int32 */
  code?: number;
  data?: Record<string, TermsOfUseView>;
  message?: string;
}

export interface ApiResultMockInvestSeasonView {
  /** @format int32 */
  code?: number;
  data?: MockInvestSeasonView;
  message?: string;
}

export interface ApiResultMockInvestTermsOfUseView {
  /** @format int32 */
  code?: number;
  data?: MockInvestTermsOfUseView;
  message?: string;
}

export interface ApiResultMockInvestView {
  /** @format int32 */
  code?: number;
  data?: MockInvestView;
  message?: string;
}

export interface ApiResultUserView {
  /** @format int32 */
  code?: number;
  data?: UserView;
  message?: string;
}

export interface ApiResultVoid {
  /** @format int32 */
  code?: number;
  data?: object;
  message?: string;
}

export interface AppLoggingRequest {
  routeName?: string;
}

export interface AppPurchaseHistoryRequest {
  /** @format date-time */
  apiTransactionDate?: string;
  dataJson?: string;
  productId?: string;
  servicePlatform?: AppPurchaseHistoryRequestServicePlatformEnum;
  transactionId?: string;
}

export type AppPurchaseHistoryRequestServicePlatformEnum = "android" | "ios";

export interface AppVersionView {
  displayStatus?: AppVersionViewDisplayStatusEnum;
  /** @format int64 */
  id?: number;
  platform?: string;
  updateLink?: string;
  version?: string;
}

export type AppVersionViewDisplayStatusEnum = "SHOW" | "HIDE" | "WAITING" | "DELETE";

export interface AverageVolumeView {
  /** @format double */
  av?: number;
  /** @format double */
  bv?: number;
  cd?: string;
  /** @format int64 */
  rm?: number;
  /** @format double */
  total?: number;
  /** @format double */
  tt?: number;
}

export type CheckLoginData = ApiResult;

export type CheckUserSeasonData = ApiResultMockInvestView;

export type ChooseVoteContentData = ApiResult;

/** @default "LIKES" */
export type ColumnEnum = "REPLIES" | "VIEWS" | "LIKES" | "HOTSCORE" | "RECENT";

/** @default "ASC" */
export type CommentSortTypeEnum = "DESC" | "ASC";

export interface CryptoAdvertiseAlarmAuditRequest {
  advertiseAlarmAvail?: boolean;
  communityPostAlarmAvail?: boolean;
  midnightAdvertiseAlarmAvail?: boolean;
}

export interface CryptoAdvertiseAlarmAuditView {
  advertiseAlarmAvail?: boolean;
  communityPostAlarmAvail?: boolean;
  midnightAdvertiseAlarmAvail?: boolean;
}

export interface CryptoAlarmAddRequest {
  /** @format int32 */
  alarmCount?: number;
  currencyCode?: string;
  currencyExchangeType?: CryptoAlarmAddRequestCurrencyExchangeTypeEnum;
  dataJson?: string;
  /** @format int64 */
  id?: number;
  market?: string;
  type?: CryptoAlarmAddRequestTypeEnum;
}

export type CryptoAlarmAddRequestCurrencyExchangeTypeEnum = "UPBIT" | "BITHUMB" | "BINANCE" | "COINBASE";

export type CryptoAlarmAddRequestTypeEnum =
  | "PRICE_ARRIVED_RISE"
  | "PRICE_ARRIVED_FALL"
  | "PRICE_SUDDEN_CHANGE_RISE"
  | "PRICE_SUDDEN_CHANGE_FALL"
  | "BIG_TRADE_BID_TRANSACTION"
  | "BIG_TRADE_ASK_TRANSACTION"
  | "VERY_BIG_TRADE_BID_TRANSACTION"
  | "VERY_BIG_TRADE_ASK_TRANSACTION"
  | "TRADE_VOLUME_SUDDEN_CHANGE_RISE"
  | "TRADE_VOLUME_SUDDEN_CHANGE_FALL"
  | "ASK_PERCENTAGE_SUDDEN_CHANGE_1_MIN"
  | "BID_PERCENTAGE_SUDDEN_CHANGE_1_MIN"
  | "ASK_PERCENTAGE_SUDDEN_CHANGE_5_MIN"
  | "BID_PERCENTAGE_SUDDEN_CHANGE_5_MIN"
  | "ASK_PERCENTAGE_SUDDEN_CHANGE_15_MIN"
  | "BID_PERCENTAGE_SUDDEN_CHANGE_15_MIN"
  | "ASK_PERCENTAGE_SUDDEN_CHANGE_30_MIN"
  | "BID_PERCENTAGE_SUDDEN_CHANGE_30_MIN";

export interface CryptoAlarmTypeView {
  code?: string;
  description?: string;
  detailDescription?: string;
  iconColor?: string;
  iconName?: string;
  iconType?: string;
}

export interface CryptoAlarmView {
  code?: string;
  currencyExchangeType?: CryptoAlarmViewCurrencyExchangeTypeEnum;
  currencyName?: string;
  dataJson?: string;
  /** @format int64 */
  id?: number;
  imgPath?: string;
  market?: string;
  /** @format date-time */
  modifiedDate?: string;
  type?: CryptoAlarmViewTypeEnum;
  typeView?: CryptoAlarmTypeView;
  /** @format int64 */
  userId?: number;
}

export type CryptoAlarmViewCurrencyExchangeTypeEnum = "UPBIT" | "BITHUMB" | "BINANCE" | "COINBASE";

export type CryptoAlarmViewTypeEnum =
  | "PRICE_ARRIVED_RISE"
  | "PRICE_ARRIVED_FALL"
  | "PRICE_SUDDEN_CHANGE_RISE"
  | "PRICE_SUDDEN_CHANGE_FALL"
  | "BIG_TRADE_BID_TRANSACTION"
  | "BIG_TRADE_ASK_TRANSACTION"
  | "VERY_BIG_TRADE_BID_TRANSACTION"
  | "VERY_BIG_TRADE_ASK_TRANSACTION"
  | "TRADE_VOLUME_SUDDEN_CHANGE_RISE"
  | "TRADE_VOLUME_SUDDEN_CHANGE_FALL"
  | "ASK_PERCENTAGE_SUDDEN_CHANGE_1_MIN"
  | "BID_PERCENTAGE_SUDDEN_CHANGE_1_MIN"
  | "ASK_PERCENTAGE_SUDDEN_CHANGE_5_MIN"
  | "BID_PERCENTAGE_SUDDEN_CHANGE_5_MIN"
  | "ASK_PERCENTAGE_SUDDEN_CHANGE_15_MIN"
  | "BID_PERCENTAGE_SUDDEN_CHANGE_15_MIN"
  | "ASK_PERCENTAGE_SUDDEN_CHANGE_30_MIN"
  | "BID_PERCENTAGE_SUDDEN_CHANGE_30_MIN";

export interface CryptoAppPointHistoryView {
  /** @format int64 */
  amount?: number;
  /** @format int64 */
  change?: number;
  /** @format int64 */
  id?: number;
  reason?: CryptoAppPointHistoryViewReasonEnum;
  /** @format int64 */
  userId?: number;
}

export type CryptoAppPointHistoryViewReasonEnum =
  | "COMMUNITY_WRITE"
  | "COMMUNITY_VIEW"
  | "COMMUNITY_LIKE_PRESSED"
  | "COMMUNITY_DISLIKE_PRESSED"
  | "COMMUNITY_REPLY_WRITE";

export interface CryptoAppPointView {
  /** @format int64 */
  userId?: number;
  /** @format int64 */
  value?: number;
}

export type CurrencyExchangeTypeEnum = "UPBIT" | "BITHUMB" | "BINANCE" | "COINBASE";

/** @default "UPBIT" */
export type CurrencyExchangeTypeEnum1 = "UPBIT" | "BITHUMB" | "BINANCE" | "COINBASE";

export type CurrencyExchangeTypeEnum10 = "UPBIT" | "BITHUMB" | "BINANCE" | "COINBASE";

export type CurrencyExchangeTypeEnum2 = "UPBIT" | "BITHUMB" | "BINANCE" | "COINBASE";

export type CurrencyExchangeTypeEnum3 = "UPBIT" | "BITHUMB" | "BINANCE" | "COINBASE";

export type CurrencyExchangeTypeEnum4 = "UPBIT" | "BITHUMB" | "BINANCE" | "COINBASE";

export type CurrencyExchangeTypeEnum5 = "UPBIT" | "BITHUMB" | "BINANCE" | "COINBASE";

export type CurrencyExchangeTypeEnum6 = "UPBIT" | "BITHUMB" | "BINANCE" | "COINBASE";

export type CurrencyExchangeTypeEnum7 = "UPBIT" | "BITHUMB" | "BINANCE" | "COINBASE";

export type CurrencyExchangeTypeEnum8 = "UPBIT" | "BITHUMB" | "BINANCE" | "COINBASE";

export type CurrencyExchangeTypeEnum9 = "UPBIT" | "BITHUMB" | "BINANCE" | "COINBASE";

export interface CurrencyTradeView {
  /** @format double */
  amount?: number;
  /** @format double */
  averagePrice?: number;
  change?: string;
  changePrice?: number;
  /** @format double */
  changeRate?: number;
  code?: string;
  createBy?: string;
  /** @format date-time */
  createDate?: string;
  currentPrice?: number;
  /** @format int64 */
  id?: number;
  imgPath?: string;
  modifyBy?: string;
  /** @format date-time */
  modifyDate?: string;
  name?: string;
}

export interface CurrencyView {
  averageVolumeView?: AverageVolumeView[];
  change?: string;
  changePrice?: number;
  /** @format double */
  changeRate?: number;
  code?: string;
  codeWithMarket?: string;
  createBy?: string;
  /** @format date-time */
  createDate?: string;
  currencyVolumeView?: CurrencyVolumeView[];
  currentPrice?: number;
  /** @format int64 */
  id?: number;
  imgPath?: string;
  market?: string;
  modifyBy?: string;
  /** @format date-time */
  modifyDate?: string;
  name?: string;
  paymentCurrencyPrice?: number;
  /** @format double */
  transactionAmount?: number;
}

export interface CurrencyVolumeView {
  /** @format double */
  askVolume?: number;
  /** @format double */
  bidVolume?: number;
  code?: string;
  /** @format date-time */
  localDateTime?: string;
  /** @format double */
  totalVolume?: number;
}

export type DataListData = ApiResult;

export interface DataListParams {
  currencyExchangeType: CurrencyExchangeTypeEnum8;
  market: string;
}

export type DataListParams1CurrencyExchangeTypeEnum = "UPBIT" | "BITHUMB" | "BINANCE" | "COINBASE";

export type DeleteData = ApiResultListCryptoAlarmView;

export type DeletePostData = ApiResult;

export type DeleteReplyData = ApiResult;

export type DeleteUserUpbitKeyData = ApiResult;

export type EnterMockInvestData = ApiResultVoid;

export type FindAllUserHistoryData = ApiResultListCryptoAppPointHistoryView;

export type ForceUpdateSchedulerData = ApiResult;

export interface ForceUpdateSchedulerParams {
  password: string;
}

export type Get1Data = ApiResultCryptoAlarmView;

export type GetAppVersionData = ApiResultAppVersionView;

export interface GetAppVersionParams {
  platform: string;
}

export type GetAuditInfoData = ApiResultCryptoAdvertiseAlarmAuditView;

export type GetBoardsData = ApiResult;

export type GetBuyTopListWithMinuteData = ApiResult;

export interface GetBuyTopListWithMinuteParams {
  currencyExchangeType: CurrencyExchangeTypeEnum7;
  input?: string;
  market: string;
  /** @format int64 */
  minute: number;
  /**
   * @format int32
   * @default 10
   */
  size?: number;
}

export type GetBuyTopListWithMinuteParams1CurrencyExchangeTypeEnum = "UPBIT" | "BITHUMB" | "BINANCE" | "COINBASE";

export type GetCryptoAlarmTypeViewListData = ApiResultListCryptoAlarmTypeView;

export type GetCurrentPurchaseHistoryInformationData = ApiResult;

export interface GetCurrentPurchaseHistoryInformationParams {
  servicePlatform: ServicePlatformEnum1;
}

export type GetCurrentPurchaseHistoryInformationParams1ServicePlatformEnum = "android" | "ios";

export type GetCurrentSeasonData = ApiResultMockInvestSeasonView;

export type GetData = ApiResult;

export type GetFullReplyData = ApiResult;

export type GetHashTagData = ApiResult;

export interface GetHashTagParams {
  keyword: string;
  /**
   * @format int32
   * @default 5
   */
  size?: number;
}

export type GetLikeHateData = ApiResult;

export type GetListWithMinuteData = ApiResult;

export interface GetListWithMinuteParams {
  currencyExchangeType: CurrencyExchangeTypeEnum5;
  input?: string;
  market: string;
  /** @format int64 */
  minute: number;
  /**
   * @format int32
   * @default 10
   */
  size?: number;
}

export type GetListWithMinuteParams1CurrencyExchangeTypeEnum = "UPBIT" | "BITHUMB" | "BINANCE" | "COINBASE";

export interface GetParams {
  code: string;
  currencyExchangeType: CurrencyExchangeTypeEnum2;
  market: string;
}

export type GetParams1CurrencyExchangeTypeEnum = "UPBIT" | "BITHUMB" | "BINANCE" | "COINBASE";

export type GetPostAvailData = ApiResult;

export type GetPostHatesData = ApiResult;

export type GetPostLikesData = ApiResult;

export type GetPostSpecific1Data = ApiResult;

export type GetPostSpecificData = ApiResult;

export interface GetPostSpecificParams {
  /** @default "ASC" */
  commentSortType?: CommentSortTypeEnum;
  /** @format int64 */
  postId: number;
}

/** @default "ASC" */
export type GetPostSpecificParams1CommentSortTypeEnum = "DESC" | "ASC";

export type GetPostViewsData = ApiResult;

export type GetRepliesData = ApiResult;

export type GetReplyData = ApiResult;

export type GetSellTopListWithMinuteData = ApiResult;

export interface GetSellTopListWithMinuteParams {
  currencyExchangeType: CurrencyExchangeTypeEnum6;
  input?: string;
  market: string;
  /** @format int64 */
  minute: number;
  /**
   * @format int32
   * @default 10
   */
  size?: number;
}

export type GetSellTopListWithMinuteParams1CurrencyExchangeTypeEnum = "UPBIT" | "BITHUMB" | "BINANCE" | "COINBASE";

export type GetStatusAliveData = ApiResult;

export type GetStatusHeapData = ApiResult;

export type GetTermsOfUseData = ApiResultMockInvestTermsOfUseView;

export type GetTradeAvailCurrencyListData = ApiResultListCurrencyView;

export interface GetTradeAvailCurrencyListParams {
  /** @default "UPBIT" */
  currencyExchangeType?: CurrencyExchangeTypeEnum1;
}

/** @default "UPBIT" */
export type GetTradeAvailCurrencyListParams1CurrencyExchangeTypeEnum = "UPBIT" | "BITHUMB" | "BINANCE" | "COINBASE";

export type GetUserCryptoAmountData = ApiResultListCurrencyTradeView;

export interface GetUserCryptoAmountParams {
  currencyExchangeType: CurrencyExchangeTypeEnum;
}

export type GetUserCryptoAmountParams1CurrencyExchangeTypeEnum = "UPBIT" | "BITHUMB" | "BINANCE" | "COINBASE";

export type GetUserCryptoAppPoint1Data = ApiResultMapStringInAppPurchaseView;

export interface GetUserCryptoAppPoint1Params {
  servicePlatform: ServicePlatformEnum;
}

export type GetUserCryptoAppPoint1Params1ServicePlatformEnum = "android" | "ios";

export type GetUserCryptoAppPoint2Data = ApiResultCryptoAppPointView;

export type GetUserCryptoAppPointData = ApiResultMapTermsOfUseTypeTermsOfUseView;

export interface GetUserCryptoAppPointParams {
  types: TypesEnum[];
}

export type GetUserCryptoAppPointParams1TypesEnum = "TERMS_OF_USE" | "MARKETING_AGREE" | "PRIVACY_INFORMATION";

export type GetUserCryptoPreTradeData = ApiResultListUserRequestView;

export type GetUserKrwAmountData = ApiResultDouble;

export type GetUserUpbitAssetData = ApiResult;

export interface GetUserUpbitAssetParams {
  currencyExchangeType: CurrencyExchangeTypeEnum10;
}

export type GetUserUpbitAssetParams1CurrencyExchangeTypeEnum = "UPBIT" | "BITHUMB" | "BINANCE" | "COINBASE";

export type GetUserUpbitKeyData = ApiResult;

export type GetUserUpbitSpecificAssetData = ApiResult;

export interface GetUserUpbitSpecificAssetParams {
  code: string;
  currencyExchangeType: CurrencyExchangeTypeEnum9;
}

export type GetUserUpbitSpecificAssetParams1CurrencyExchangeTypeEnum = "UPBIT" | "BITHUMB" | "BINANCE" | "COINBASE";

export type GetVoteContentData = ApiResult;

export interface InAppPurchaseView {
  /** @format int32 */
  discountPrice?: number;
  /** @format int32 */
  discountRate?: number;
  displayStatus?: InAppPurchaseViewDisplayStatusEnum;
  /** @format int64 */
  id?: number;
  /** @format int32 */
  originalPrice?: number;
  productId?: string;
  productName?: string;
  servicePlatform?: InAppPurchaseViewServicePlatformEnum;
  /** @format int64 */
  subscriptionMonth?: number;
}

export type InAppPurchaseViewDisplayStatusEnum = "SHOW" | "HIDE" | "WAITING" | "DELETE";

export type InAppPurchaseViewServicePlatformEnum = "android" | "ios";

export interface LikeHateToggleRequest {
  status?: string;
}

export type List1Data = ApiResultListCryptoAlarmView;

export type ListData = ApiResult;

export interface ListParams {
  currencyExchangeType: CurrencyExchangeTypeEnum4;
  market: string;
}

export type ListParams1CurrencyExchangeTypeEnum = "UPBIT" | "BITHUMB" | "BINANCE" | "COINBASE";

export type LoginData = ApiResult;

export type MigrateData = ApiResult;

export interface MigrateParams {
  currencyExchangeType: CurrencyExchangeTypeEnum3;
}

export type MigrateParams1CurrencyExchangeTypeEnum = "UPBIT" | "BITHUMB" | "BINANCE" | "COINBASE";

export interface MockInvestEnterRequest {
  /** @format int64 */
  mockInvestTermsOfUseId?: number;
}

export interface MockInvestSeasonView {
  /** @format date-time */
  endDate?: string;
  /** @format date-time */
  startDate?: string;
  title?: string;
  /** @format int32 */
  version?: number;
}

export interface MockInvestTermsOfUseView {
  content?: string;
  /** @format int64 */
  id?: number;
  title?: string;
  /** @format double */
  version?: number;
}

export interface MockInvestView {
  displayStatus?: MockInvestViewDisplayStatusEnum;
  /** @format date-time */
  endDate?: string;
  /** @format int64 */
  id?: number;
  /** @format int32 */
  season?: number;
  /** @format date-time */
  startDate?: string;
  title?: string;
}

export type MockInvestViewDisplayStatusEnum = "SHOW" | "HIDE" | "WAITING" | "DELETE";

export type ModifyPostData = ApiResult;

export interface ModifyPostParams {
  param: string;
  /** @format int64 */
  postId: number;
}

export interface ModifyPostPayload {
  attachmentList?: File[];
}

export type ModifyReplyData = ApiResult;

export interface ModifyReplyPayload {
  attachmentList?: File[];
  request: ReplyModifyRequest;
}

export interface ModifyUserProfileDto {
  /** 유저 닉네임 */
  nickname: string;
}

export type OrderRequestData = ApiResultVoid;

export type PostLikeData = ApiResult;

export type ReplyLikeData = ApiResult;

export interface ReplyModifyRequest {
  content: string;
  isChanged: boolean;
  /** @format int64 */
  postId: number;
}

export type ReportData = ApiResultVoid;

export interface ReportParams {
  /** @format int64 */
  postId: number;
  reportType: ReportTypeEnum;
}

export type ReportParams1ReportTypeEnum = "POST" | "USER";

export type ReportTypeEnum = "POST" | "USER";

export type RetrievePostsByBoardData = ApiResult;

export interface RetrievePostsByBoardParams {
  /** @format int64 */
  boardId: number;
  /** @default "LIKES" */
  column?: ColumnEnum;
  /**
   * @format int32
   * @default 1
   */
  page?: number;
  /**
   * @format int32
   * @default 5
   */
  size?: number;
}

/** @default "LIKES" */
export type RetrievePostsByBoardParams1ColumnEnum = "REPLIES" | "VIEWS" | "LIKES" | "HOTSCORE" | "RECENT";

export type ServicePlatformEnum = "android" | "ios";

export type ServicePlatformEnum1 = "android" | "ios";

export type SetAuditInfoData = ApiResultCryptoAdvertiseAlarmAuditView;

export type SetUserUpbitKeyData = ApiResult;

export type SignUpData = ApiResult;

export interface SignUpRequest {
  authority?: SignUpRequestAuthorityEnum;
  firebaseToken?: string;
  loginType?: SignUpRequestLoginTypeEnum;
  nickname?: string;
  providerId?: string;
}

export type SignUpRequestAuthorityEnum = "NORMAL_USER" | "ALARM_PAID" | "ANALYSIS_PAID" | "ALL_PAID";

export type SignUpRequestLoginTypeEnum = "KAKAO" | "NAVER" | "APPLE";

export type SubmitPurchaseData = ApiResultMapStringInAppPurchaseView;

export interface TermsOfUseView {
  body?: string;
  displayStatus?: TermsOfUseViewDisplayStatusEnum;
  /** @format int64 */
  id?: number;
  required?: boolean;
  title?: string;
  type?: TermsOfUseViewTypeEnum;
}

export type TermsOfUseViewDisplayStatusEnum = "SHOW" | "HIDE" | "WAITING" | "DELETE";

export type TermsOfUseViewTypeEnum = "TERMS_OF_USE" | "MARKETING_AGREE" | "PRIVACY_INFORMATION";

export type ToggleLikeHateData = ApiResult;

export interface TokenUpdateRequest {
  firebaseToken?: string;
  /** @format int64 */
  userId?: number;
}

export type TypesEnum = "TERMS_OF_USE" | "MARKETING_AGREE" | "PRIVACY_INFORMATION";

export interface UpbitApiKeyRequest {
  accessKey?: string;
  privateKey?: string;
}

export type UpdateNicknameData = ApiResultUserView;

export type UpdateProfileData = ApiResultUserView;

export interface UpdateProfilePayload {
  /** @format binary */
  thumbnail?: File;
}

export type UploadPostData = ApiResult;

export interface UploadPostParams {
  param: string;
}

export interface UploadPostPayload {
  attachmentList?: File[];
  /** @format binary */
  thumbnail?: File;
}

export type UploadReplyData = ApiResult;

export interface UploadReplyParams {
  param: string;
}

export interface UploadReplyPayload {
  attachmentList?: File[];
}

export interface UserRequest {
  code?: string;
  /** @format double */
  price?: number;
  tradeType?: UserRequestTradeTypeEnum;
  /** @format double */
  volume?: number;
}

export type UserRequestTradeTypeEnum = "BUY" | "BUY_MARKET" | "SELL" | "SELL_MARKET";

export interface UserRequestView {
  code?: string;
  /** @format double */
  price?: number;
  tradeType?: UserRequestViewTradeTypeEnum;
  /** @format int64 */
  userId?: number;
  /** @format double */
  volume?: number;
}

export type UserRequestViewTradeTypeEnum = "BUY" | "BUY_MARKET" | "SELL" | "SELL_MARKET";

export interface UserView {
  authority?: UserViewAuthorityEnum;
  displayStatus?: UserViewDisplayStatusEnum;
  loginToken?: string;
  nickname?: string;
  profileImage?: string;
  providerId?: string;
  /** @format int64 */
  userId?: number;
}

export type UserViewAuthorityEnum = "NORMAL_USER" | "ALARM_PAID" | "ANALYSIS_PAID" | "ALL_PAID";

export type UserViewDisplayStatusEnum = "SHOW" | "HIDE" | "WAITING" | "DELETE";

export interface VoteContentChooseRequest {
  /** @format int64 */
  voteContentId: number;
}
