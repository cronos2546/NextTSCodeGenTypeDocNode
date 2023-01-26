import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  blogPostCollection?: Maybe<BlogPostCollection>;
  categoryPageCollection?: Maybe<CategoryPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  kbAppSiteSettingsCollection?: Maybe<KbAppSiteSettingsCollection>;
  navItemCollection?: Maybe<NavItemCollection>;
  pageBlockCollection?: Maybe<PageBlockCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type AssetLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsCategoryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsKbAppSiteSettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsNavItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsPageBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/blogPost) */
export type BlogPost = Entry & {
  __typename?: 'BlogPost';
  body?: Maybe<BlogPostBody>;
  contentfulMetadata: ContentfulMetadata;
  date?: Maybe<Scalars['DateTime']>;
  excerpt?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  layoutFooter?: Maybe<LayoutFooter>;
  layoutHeader?: Maybe<LayoutHeader>;
  linkedFrom?: Maybe<BlogPostLinkingCollections>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/blogPost) */
export type BlogPostBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/blogPost) */
export type BlogPostDateArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/blogPost) */
export type BlogPostExcerptArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/blogPost) */
export type BlogPostImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/blogPost) */
export type BlogPostLayoutFooterArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/blogPost) */
export type BlogPostLayoutHeaderArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/blogPost) */
export type BlogPostLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/blogPost) */
export type BlogPostSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/blogPost) */
export type BlogPostTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type BlogPostBody = {
  __typename?: 'BlogPostBody';
  json: Scalars['JSON'];
  links: BlogPostBodyLinks;
};

export type BlogPostBodyAssets = {
  __typename?: 'BlogPostBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type BlogPostBodyEntries = {
  __typename?: 'BlogPostBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type BlogPostBodyLinks = {
  __typename?: 'BlogPostBodyLinks';
  assets: BlogPostBodyAssets;
  entries: BlogPostBodyEntries;
};

export type BlogPostCollection = {
  __typename?: 'BlogPostCollection';
  items: Array<Maybe<BlogPost>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type BlogPostFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  date?: InputMaybe<Scalars['DateTime']>;
  date_exists?: InputMaybe<Scalars['Boolean']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_not?: InputMaybe<Scalars['DateTime']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  excerpt?: InputMaybe<Scalars['String']>;
  excerpt_contains?: InputMaybe<Scalars['String']>;
  excerpt_exists?: InputMaybe<Scalars['Boolean']>;
  excerpt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  excerpt_not?: InputMaybe<Scalars['String']>;
  excerpt_not_contains?: InputMaybe<Scalars['String']>;
  excerpt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  layoutFooter?: InputMaybe<CfLayoutFooterNestedFilter>;
  layoutFooter_exists?: InputMaybe<Scalars['Boolean']>;
  layoutHeader?: InputMaybe<CfLayoutHeaderNestedFilter>;
  layoutHeader_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlogPostLinkingCollections = {
  __typename?: 'BlogPostLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type BlogPostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum BlogPostOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** A page for a group of articles. It helps a user navigate to a section of your website and find specific types of articles. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/categoryPage) */
export type CategoryPage = Entry & {
  __typename?: 'CategoryPage';
  articleBody?: Maybe<CategoryPageArticleBody>;
  articleCategory?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<CategoryPageLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** A page for a group of articles. It helps a user navigate to a section of your website and find specific types of articles. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/categoryPage) */
export type CategoryPageArticleBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A page for a group of articles. It helps a user navigate to a section of your website and find specific types of articles. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/categoryPage) */
export type CategoryPageArticleCategoryArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A page for a group of articles. It helps a user navigate to a section of your website and find specific types of articles. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/categoryPage) */
export type CategoryPageDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A page for a group of articles. It helps a user navigate to a section of your website and find specific types of articles. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/categoryPage) */
export type CategoryPageImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** A page for a group of articles. It helps a user navigate to a section of your website and find specific types of articles. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/categoryPage) */
export type CategoryPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** A page for a group of articles. It helps a user navigate to a section of your website and find specific types of articles. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/categoryPage) */
export type CategoryPageNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type CategoryPageArticleBody = {
  __typename?: 'CategoryPageArticleBody';
  json: Scalars['JSON'];
  links: CategoryPageArticleBodyLinks;
};

export type CategoryPageArticleBodyAssets = {
  __typename?: 'CategoryPageArticleBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type CategoryPageArticleBodyEntries = {
  __typename?: 'CategoryPageArticleBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type CategoryPageArticleBodyLinks = {
  __typename?: 'CategoryPageArticleBodyLinks';
  assets: CategoryPageArticleBodyAssets;
  entries: CategoryPageArticleBodyEntries;
};

export type CategoryPageCollection = {
  __typename?: 'CategoryPageCollection';
  items: Array<Maybe<CategoryPage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CategoryPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<CategoryPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CategoryPageFilter>>>;
  articleBody_contains?: InputMaybe<Scalars['String']>;
  articleBody_exists?: InputMaybe<Scalars['Boolean']>;
  articleBody_not_contains?: InputMaybe<Scalars['String']>;
  articleCategory?: InputMaybe<Scalars['String']>;
  articleCategory_contains?: InputMaybe<Scalars['String']>;
  articleCategory_exists?: InputMaybe<Scalars['Boolean']>;
  articleCategory_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  articleCategory_not?: InputMaybe<Scalars['String']>;
  articleCategory_not_contains?: InputMaybe<Scalars['String']>;
  articleCategory_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CategoryPageLinkingCollections = {
  __typename?: 'CategoryPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type CategoryPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum CategoryPageOrder {
  ArticleCategoryAsc = 'articleCategory_ASC',
  ArticleCategoryDesc = 'articleCategory_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** A support article page consisting of rearrangeable content blocks: article body, category and others. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/kbAppArticle) */
export type KbAppArticle = Entry & {
  __typename?: 'KbAppArticle';
  body?: Maybe<KbAppArticleBody>;
  contentfulMetadata: ContentfulMetadata;
  kbAppCategory?: Maybe<KbAppCategory>;
  linkedFrom?: Maybe<KbAppArticleLinkingCollections>;
  metaDescription?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** A support article page consisting of rearrangeable content blocks: article body, category and others. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/kbAppArticle) */
export type KbAppArticleBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A support article page consisting of rearrangeable content blocks: article body, category and others. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/kbAppArticle) */
export type KbAppArticleKbAppCategoryArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** A support article page consisting of rearrangeable content blocks: article body, category and others. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/kbAppArticle) */
export type KbAppArticleLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** A support article page consisting of rearrangeable content blocks: article body, category and others. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/kbAppArticle) */
export type KbAppArticleMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A support article page consisting of rearrangeable content blocks: article body, category and others. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/kbAppArticle) */
export type KbAppArticleSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A support article page consisting of rearrangeable content blocks: article body, category and others. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/kbAppArticle) */
export type KbAppArticleTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type KbAppArticleBody = {
  __typename?: 'KbAppArticleBody';
  json: Scalars['JSON'];
  links: KbAppArticleBodyLinks;
};

export type KbAppArticleBodyAssets = {
  __typename?: 'KbAppArticleBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type KbAppArticleBodyEntries = {
  __typename?: 'KbAppArticleBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type KbAppArticleBodyLinks = {
  __typename?: 'KbAppArticleBodyLinks';
  assets: KbAppArticleBodyAssets;
  entries: KbAppArticleBodyEntries;
};

export type KbAppArticleCollection = {
  __typename?: 'KbAppArticleCollection';
  items: Array<Maybe<KbAppArticle>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type KbAppArticleFilter = {
  AND?: InputMaybe<Array<InputMaybe<KbAppArticleFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<KbAppArticleFilter>>>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  kbAppCategory?: InputMaybe<CfKbAppCategoryNestedFilter>;
  kbAppCategory_exists?: InputMaybe<Scalars['Boolean']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaDescription_contains?: InputMaybe<Scalars['String']>;
  metaDescription_exists?: InputMaybe<Scalars['Boolean']>;
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metaDescription_not?: InputMaybe<Scalars['String']>;
  metaDescription_not_contains?: InputMaybe<Scalars['String']>;
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type KbAppArticleLinkingCollections = {
  __typename?: 'KbAppArticleLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type KbAppArticleLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum KbAppArticleOrder {
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** A block to define the categories that organize your support articles. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/kbAppCategory) */
export type KbAppCategory = Entry & {
  __typename?: 'KbAppCategory';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<KbAppCategoryLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  previewDescription?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** A block to define the categories that organize your support articles. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/kbAppCategory) */
export type KbAppCategoryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** A block to define the categories that organize your support articles. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/kbAppCategory) */
export type KbAppCategoryNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A block to define the categories that organize your support articles. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/kbAppCategory) */
export type KbAppCategoryPreviewDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A block to define the categories that organize your support articles. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/kbAppCategory) */
export type KbAppCategorySlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type KbAppCategoryCollection = {
  __typename?: 'KbAppCategoryCollection';
  items: Array<Maybe<KbAppCategory>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type KbAppCategoryFilter = {
  AND?: InputMaybe<Array<InputMaybe<KbAppCategoryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<KbAppCategoryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewDescription?: InputMaybe<Scalars['String']>;
  previewDescription_contains?: InputMaybe<Scalars['String']>;
  previewDescription_exists?: InputMaybe<Scalars['Boolean']>;
  previewDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewDescription_not?: InputMaybe<Scalars['String']>;
  previewDescription_not_contains?: InputMaybe<Scalars['String']>;
  previewDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type KbAppCategoryLinkingCollections = {
  __typename?: 'KbAppCategoryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  kbAppArticleCollection?: Maybe<KbAppArticleCollection>;
};


export type KbAppCategoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type KbAppCategoryLinkingCollectionsKbAppArticleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum KbAppCategoryOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PreviewDescriptionAsc = 'previewDescription_ASC',
  PreviewDescriptionDesc = 'previewDescription_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Add links throughout your site. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/kbAppLink) */
export type KbAppLink = Entry & {
  __typename?: 'KbAppLink';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<KbAppLinkLinkingCollections>;
  sys: Sys;
  text?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


/** Add links throughout your site. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/kbAppLink) */
export type KbAppLinkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Add links throughout your site. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/kbAppLink) */
export type KbAppLinkTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Add links throughout your site. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/kbAppLink) */
export type KbAppLinkUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type KbAppLinkCollection = {
  __typename?: 'KbAppLinkCollection';
  items: Array<Maybe<KbAppLink>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type KbAppLinkFilter = {
  AND?: InputMaybe<Array<InputMaybe<KbAppLinkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<KbAppLinkFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  text?: InputMaybe<Scalars['String']>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_exists?: InputMaybe<Scalars['Boolean']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text_not?: InputMaybe<Scalars['String']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type KbAppLinkLinkingCollections = {
  __typename?: 'KbAppLinkLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  kbAppSiteSettingsCollection?: Maybe<KbAppSiteSettingsCollection>;
};


export type KbAppLinkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type KbAppLinkLinkingCollectionsKbAppSiteSettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum KbAppLinkOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

/** Customize the look of the help center site included with this app. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/kbAppSiteSettings) */
export type KbAppSiteSettings = Entry & {
  __typename?: 'KbAppSiteSettings';
  contentfulMetadata: ContentfulMetadata;
  googleAnalyticsId?: Maybe<Scalars['String']>;
  headerLinksCollection?: Maybe<KbAppSiteSettingsHeaderLinksCollection>;
  heading?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<KbAppSiteSettingsLinkingCollections>;
  logo?: Maybe<Asset>;
  siteDescriptionSeo?: Maybe<Scalars['String']>;
  siteName?: Maybe<Scalars['String']>;
  subheading?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Customize the look of the help center site included with this app. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/kbAppSiteSettings) */
export type KbAppSiteSettingsGoogleAnalyticsIdArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Customize the look of the help center site included with this app. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/kbAppSiteSettings) */
export type KbAppSiteSettingsHeaderLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Customize the look of the help center site included with this app. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/kbAppSiteSettings) */
export type KbAppSiteSettingsHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Customize the look of the help center site included with this app. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/kbAppSiteSettings) */
export type KbAppSiteSettingsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Customize the look of the help center site included with this app. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/kbAppSiteSettings) */
export type KbAppSiteSettingsLogoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Customize the look of the help center site included with this app. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/kbAppSiteSettings) */
export type KbAppSiteSettingsSiteDescriptionSeoArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Customize the look of the help center site included with this app. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/kbAppSiteSettings) */
export type KbAppSiteSettingsSiteNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Customize the look of the help center site included with this app. [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/kbAppSiteSettings) */
export type KbAppSiteSettingsSubheadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type KbAppSiteSettingsCollection = {
  __typename?: 'KbAppSiteSettingsCollection';
  items: Array<Maybe<KbAppSiteSettings>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type KbAppSiteSettingsFilter = {
  AND?: InputMaybe<Array<InputMaybe<KbAppSiteSettingsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<KbAppSiteSettingsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  googleAnalyticsId?: InputMaybe<Scalars['String']>;
  googleAnalyticsId_contains?: InputMaybe<Scalars['String']>;
  googleAnalyticsId_exists?: InputMaybe<Scalars['Boolean']>;
  googleAnalyticsId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  googleAnalyticsId_not?: InputMaybe<Scalars['String']>;
  googleAnalyticsId_not_contains?: InputMaybe<Scalars['String']>;
  googleAnalyticsId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headerLinksCollection_exists?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Scalars['String']>;
  heading_contains?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_not?: InputMaybe<Scalars['String']>;
  heading_not_contains?: InputMaybe<Scalars['String']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  logo_exists?: InputMaybe<Scalars['Boolean']>;
  siteDescriptionSeo?: InputMaybe<Scalars['String']>;
  siteDescriptionSeo_contains?: InputMaybe<Scalars['String']>;
  siteDescriptionSeo_exists?: InputMaybe<Scalars['Boolean']>;
  siteDescriptionSeo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteDescriptionSeo_not?: InputMaybe<Scalars['String']>;
  siteDescriptionSeo_not_contains?: InputMaybe<Scalars['String']>;
  siteDescriptionSeo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteName?: InputMaybe<Scalars['String']>;
  siteName_contains?: InputMaybe<Scalars['String']>;
  siteName_exists?: InputMaybe<Scalars['Boolean']>;
  siteName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteName_not?: InputMaybe<Scalars['String']>;
  siteName_not_contains?: InputMaybe<Scalars['String']>;
  siteName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheading?: InputMaybe<Scalars['String']>;
  subheading_contains?: InputMaybe<Scalars['String']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheading_not?: InputMaybe<Scalars['String']>;
  subheading_not_contains?: InputMaybe<Scalars['String']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type KbAppSiteSettingsHeaderLinksCollection = {
  __typename?: 'KbAppSiteSettingsHeaderLinksCollection';
  items: Array<Maybe<KbAppLink>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type KbAppSiteSettingsLinkingCollections = {
  __typename?: 'KbAppSiteSettingsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type KbAppSiteSettingsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum KbAppSiteSettingsOrder {
  GoogleAnalyticsIdAsc = 'googleAnalyticsId_ASC',
  GoogleAnalyticsIdDesc = 'googleAnalyticsId_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  SiteDescriptionSeoAsc = 'siteDescriptionSeo_ASC',
  SiteDescriptionSeoDesc = 'siteDescriptionSeo_DESC',
  SiteNameAsc = 'siteName_ASC',
  SiteNameDesc = 'siteName_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/layout) */
export type Layout = Entry & {
  __typename?: 'Layout';
  contentfulMetadata: ContentfulMetadata;
  footer?: Maybe<LayoutFooter>;
  header?: Maybe<LayoutHeader>;
  linkedFrom?: Maybe<LayoutLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/layout) */
export type LayoutFooterArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/layout) */
export type LayoutHeaderArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/layout) */
export type LayoutLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/layout) */
export type LayoutNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type LayoutCollection = {
  __typename?: 'LayoutCollection';
  items: Array<Maybe<Layout>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type LayoutFilter = {
  AND?: InputMaybe<Array<InputMaybe<LayoutFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LayoutFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  footer?: InputMaybe<CfLayoutFooterNestedFilter>;
  footer_exists?: InputMaybe<Scalars['Boolean']>;
  header?: InputMaybe<CfLayoutHeaderNestedFilter>;
  header_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/layoutFooter) */
export type LayoutFooter = Entry & {
  __typename?: 'LayoutFooter';
  contentfulMetadata: ContentfulMetadata;
  copyright?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<LayoutFooterLinkingCollections>;
  linksCollection?: Maybe<LayoutFooterLinksCollection>;
  name?: Maybe<Scalars['String']>;
  socialLinksCollection?: Maybe<LayoutFooterSocialLinksCollection>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/layoutFooter) */
export type LayoutFooterCopyrightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/layoutFooter) */
export type LayoutFooterLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/layoutFooter) */
export type LayoutFooterLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/layoutFooter) */
export type LayoutFooterNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/layoutFooter) */
export type LayoutFooterSocialLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type LayoutFooterCollection = {
  __typename?: 'LayoutFooterCollection';
  items: Array<Maybe<LayoutFooter>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type LayoutFooterFilter = {
  AND?: InputMaybe<Array<InputMaybe<LayoutFooterFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LayoutFooterFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  copyright?: InputMaybe<Scalars['String']>;
  copyright_contains?: InputMaybe<Scalars['String']>;
  copyright_exists?: InputMaybe<Scalars['Boolean']>;
  copyright_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  copyright_not?: InputMaybe<Scalars['String']>;
  copyright_not_contains?: InputMaybe<Scalars['String']>;
  copyright_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linksCollection_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  socialLinksCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type LayoutFooterLinkingCollections = {
  __typename?: 'LayoutFooterLinkingCollections';
  blogPostCollection?: Maybe<BlogPostCollection>;
  entryCollection?: Maybe<EntryCollection>;
  layoutCollection?: Maybe<LayoutCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type LayoutFooterLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type LayoutFooterLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type LayoutFooterLinkingCollectionsLayoutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type LayoutFooterLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type LayoutFooterLinksCollection = {
  __typename?: 'LayoutFooterLinksCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum LayoutFooterOrder {
  CopyrightAsc = 'copyright_ASC',
  CopyrightDesc = 'copyright_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type LayoutFooterSocialLinksCollection = {
  __typename?: 'LayoutFooterSocialLinksCollection';
  items: Array<Maybe<SocialLink>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/layoutHeader) */
export type LayoutHeader = Entry & {
  __typename?: 'LayoutHeader';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<LayoutHeaderLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  navItemsCollection?: Maybe<LayoutHeaderNavItemsCollection>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/layoutHeader) */
export type LayoutHeaderLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/layoutHeader) */
export type LayoutHeaderNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/layoutHeader) */
export type LayoutHeaderNavItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type LayoutHeaderCollection = {
  __typename?: 'LayoutHeaderCollection';
  items: Array<Maybe<LayoutHeader>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type LayoutHeaderFilter = {
  AND?: InputMaybe<Array<InputMaybe<LayoutHeaderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LayoutHeaderFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  navItemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type LayoutHeaderLinkingCollections = {
  __typename?: 'LayoutHeaderLinkingCollections';
  blogPostCollection?: Maybe<BlogPostCollection>;
  entryCollection?: Maybe<EntryCollection>;
  layoutCollection?: Maybe<LayoutCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type LayoutHeaderLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type LayoutHeaderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type LayoutHeaderLinkingCollectionsLayoutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type LayoutHeaderLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type LayoutHeaderNavItemsCollection = {
  __typename?: 'LayoutHeaderNavItemsCollection';
  items: Array<Maybe<LayoutHeaderNavItemsItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type LayoutHeaderNavItemsItem = NavItem | NavItemGroup;

export enum LayoutHeaderOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type LayoutLinkingCollections = {
  __typename?: 'LayoutLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type LayoutLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum LayoutOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/navItem) */
export type NavItem = Entry & {
  __typename?: 'NavItem';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  icon?: Maybe<Asset>;
  linkedFrom?: Maybe<NavItemLinkingCollections>;
  sys: Sys;
  text?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/navItem) */
export type NavItemDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/navItem) */
export type NavItemHrefArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/navItem) */
export type NavItemIconArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/navItem) */
export type NavItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/navItem) */
export type NavItemTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type NavItemCollection = {
  __typename?: 'NavItemCollection';
  items: Array<Maybe<NavItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NavItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavItemFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  href?: InputMaybe<Scalars['String']>;
  href_contains?: InputMaybe<Scalars['String']>;
  href_exists?: InputMaybe<Scalars['Boolean']>;
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  href_not?: InputMaybe<Scalars['String']>;
  href_not_contains?: InputMaybe<Scalars['String']>;
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  text?: InputMaybe<Scalars['String']>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_exists?: InputMaybe<Scalars['Boolean']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text_not?: InputMaybe<Scalars['String']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** A group of nav items with a title [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/navItemGroup) */
export type NavItemGroup = Entry & {
  __typename?: 'NavItemGroup';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<NavItemGroupLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  navItemsCollection?: Maybe<NavItemGroupNavItemsCollection>;
  sys: Sys;
};


/** A group of nav items with a title [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/navItemGroup) */
export type NavItemGroupLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** A group of nav items with a title [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/navItemGroup) */
export type NavItemGroupNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A group of nav items with a title [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/navItemGroup) */
export type NavItemGroupNavItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type NavItemGroupCollection = {
  __typename?: 'NavItemGroupCollection';
  items: Array<Maybe<NavItemGroup>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NavItemGroupFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavItemGroupFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavItemGroupFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  navItemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type NavItemGroupLinkingCollections = {
  __typename?: 'NavItemGroupLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  layoutHeaderCollection?: Maybe<LayoutHeaderCollection>;
};


export type NavItemGroupLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavItemGroupLinkingCollectionsLayoutHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type NavItemGroupNavItemsCollection = {
  __typename?: 'NavItemGroupNavItemsCollection';
  items: Array<Maybe<NavItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum NavItemGroupOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type NavItemLinkingCollections = {
  __typename?: 'NavItemLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  layoutHeaderCollection?: Maybe<LayoutHeaderCollection>;
  navItemGroupCollection?: Maybe<NavItemGroupCollection>;
};


export type NavItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavItemLinkingCollectionsLayoutHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavItemLinkingCollectionsNavItemGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum NavItemOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/page) */
export type Page = Entry & {
  __typename?: 'Page';
  body?: Maybe<PageBody>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  layoutFooter?: Maybe<LayoutFooter>;
  layoutHeader?: Maybe<LayoutHeader>;
  linkedFrom?: Maybe<PageLinkingCollections>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/page) */
export type PageBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/page) */
export type PageDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/page) */
export type PageImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/page) */
export type PageLayoutFooterArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/page) */
export type PageLayoutHeaderArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/page) */
export type PageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/pageBlock) */
export type PageBlock = Entry & {
  __typename?: 'PageBlock';
  contentfulMetadata: ContentfulMetadata;
  href?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<PageBlockLinkingCollections>;
  sys: Sys;
  text?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/pageBlock) */
export type PageBlockHrefArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/pageBlock) */
export type PageBlockImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/pageBlock) */
export type PageBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/pageBlock) */
export type PageBlockTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PageBlockCollection = {
  __typename?: 'PageBlockCollection';
  items: Array<Maybe<PageBlock>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageBlockFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  href?: InputMaybe<Scalars['String']>;
  href_contains?: InputMaybe<Scalars['String']>;
  href_exists?: InputMaybe<Scalars['Boolean']>;
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  href_not?: InputMaybe<Scalars['String']>;
  href_not_contains?: InputMaybe<Scalars['String']>;
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  text?: InputMaybe<Scalars['String']>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_exists?: InputMaybe<Scalars['Boolean']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text_not?: InputMaybe<Scalars['String']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageBlockLinkingCollections = {
  __typename?: 'PageBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageBlockOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC'
}

export type PageBody = {
  __typename?: 'PageBody';
  json: Scalars['JSON'];
  links: PageBodyLinks;
};

export type PageBodyAssets = {
  __typename?: 'PageBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageBodyEntries = {
  __typename?: 'PageBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageBodyLinks = {
  __typename?: 'PageBodyLinks';
  assets: PageBodyAssets;
  entries: PageBodyEntries;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  layoutFooter?: InputMaybe<CfLayoutFooterNestedFilter>;
  layoutFooter_exists?: InputMaybe<Scalars['Boolean']>;
  layoutHeader?: InputMaybe<CfLayoutHeaderNestedFilter>;
  layoutHeader_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  blogPost?: Maybe<BlogPost>;
  blogPostCollection?: Maybe<BlogPostCollection>;
  categoryPage?: Maybe<CategoryPage>;
  categoryPageCollection?: Maybe<CategoryPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  kbAppArticle?: Maybe<KbAppArticle>;
  kbAppArticleCollection?: Maybe<KbAppArticleCollection>;
  kbAppCategory?: Maybe<KbAppCategory>;
  kbAppCategoryCollection?: Maybe<KbAppCategoryCollection>;
  kbAppLink?: Maybe<KbAppLink>;
  kbAppLinkCollection?: Maybe<KbAppLinkCollection>;
  kbAppSiteSettings?: Maybe<KbAppSiteSettings>;
  kbAppSiteSettingsCollection?: Maybe<KbAppSiteSettingsCollection>;
  layout?: Maybe<Layout>;
  layoutCollection?: Maybe<LayoutCollection>;
  layoutFooter?: Maybe<LayoutFooter>;
  layoutFooterCollection?: Maybe<LayoutFooterCollection>;
  layoutHeader?: Maybe<LayoutHeader>;
  layoutHeaderCollection?: Maybe<LayoutHeaderCollection>;
  navItem?: Maybe<NavItem>;
  navItemCollection?: Maybe<NavItemCollection>;
  navItemGroup?: Maybe<NavItemGroup>;
  navItemGroupCollection?: Maybe<NavItemGroupCollection>;
  page?: Maybe<Page>;
  pageBlock?: Maybe<PageBlock>;
  pageBlockCollection?: Maybe<PageBlockCollection>;
  pageCollection?: Maybe<PageCollection>;
  socialLink?: Maybe<SocialLink>;
  socialLinkCollection?: Maybe<SocialLinkCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryBlogPostArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<BlogPostOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogPostFilter>;
};


export type QueryCategoryPageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCategoryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CategoryPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryPageFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryKbAppArticleArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryKbAppArticleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<KbAppArticleOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<KbAppArticleFilter>;
};


export type QueryKbAppCategoryArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryKbAppCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<KbAppCategoryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<KbAppCategoryFilter>;
};


export type QueryKbAppLinkArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryKbAppLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<KbAppLinkOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<KbAppLinkFilter>;
};


export type QueryKbAppSiteSettingsArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryKbAppSiteSettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<KbAppSiteSettingsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<KbAppSiteSettingsFilter>;
};


export type QueryLayoutArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryLayoutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LayoutOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LayoutFilter>;
};


export type QueryLayoutFooterArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryLayoutFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LayoutFooterOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LayoutFooterFilter>;
};


export type QueryLayoutHeaderArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryLayoutHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LayoutHeaderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LayoutHeaderFilter>;
};


export type QueryNavItemArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNavItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavItemFilter>;
};


export type QueryNavItemGroupArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNavItemGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavItemGroupOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavItemGroupFilter>;
};


export type QueryPageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageBlockArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageBlockFilter>;
};


export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageFilter>;
};


export type QuerySocialLinkArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySocialLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SocialLinkOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SocialLinkFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/socialLink) */
export type SocialLink = Entry & {
  __typename?: 'SocialLink';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SocialLinkLinkingCollections>;
  service?: Maybe<Scalars['String']>;
  sys: Sys;
  username?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/socialLink) */
export type SocialLinkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/socialLink) */
export type SocialLinkServiceArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ctbwq2mdcea/content_types/socialLink) */
export type SocialLinkUsernameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SocialLinkCollection = {
  __typename?: 'SocialLinkCollection';
  items: Array<Maybe<SocialLink>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SocialLinkFilter = {
  AND?: InputMaybe<Array<InputMaybe<SocialLinkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SocialLinkFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  service?: InputMaybe<Scalars['String']>;
  service_contains?: InputMaybe<Scalars['String']>;
  service_exists?: InputMaybe<Scalars['Boolean']>;
  service_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  service_not?: InputMaybe<Scalars['String']>;
  service_not_contains?: InputMaybe<Scalars['String']>;
  service_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  username?: InputMaybe<Scalars['String']>;
  username_contains?: InputMaybe<Scalars['String']>;
  username_exists?: InputMaybe<Scalars['Boolean']>;
  username_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  username_not?: InputMaybe<Scalars['String']>;
  username_not_contains?: InputMaybe<Scalars['String']>;
  username_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SocialLinkLinkingCollections = {
  __typename?: 'SocialLinkLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  layoutFooterCollection?: Maybe<LayoutFooterCollection>;
};


export type SocialLinkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SocialLinkLinkingCollectionsLayoutFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SocialLinkOrder {
  ServiceAsc = 'service_ASC',
  ServiceDesc = 'service_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UsernameAsc = 'username_ASC',
  UsernameDesc = 'username_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type CfKbAppCategoryNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfKbAppCategoryNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfKbAppCategoryNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewDescription?: InputMaybe<Scalars['String']>;
  previewDescription_contains?: InputMaybe<Scalars['String']>;
  previewDescription_exists?: InputMaybe<Scalars['Boolean']>;
  previewDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previewDescription_not?: InputMaybe<Scalars['String']>;
  previewDescription_not_contains?: InputMaybe<Scalars['String']>;
  previewDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfLayoutFooterNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfLayoutFooterNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfLayoutFooterNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  copyright?: InputMaybe<Scalars['String']>;
  copyright_contains?: InputMaybe<Scalars['String']>;
  copyright_exists?: InputMaybe<Scalars['Boolean']>;
  copyright_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  copyright_not?: InputMaybe<Scalars['String']>;
  copyright_not_contains?: InputMaybe<Scalars['String']>;
  copyright_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linksCollection_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  socialLinksCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfLayoutHeaderNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfLayoutHeaderNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfLayoutHeaderNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  navItemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};



export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;