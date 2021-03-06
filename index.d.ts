export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type Query = {
  __typename?: 'Query'
  asset?: Maybe<Asset>
  assetCollection?: Maybe<AssetCollection>
  caseStudy?: Maybe<CaseStudy>
  caseStudyCollection?: Maybe<CaseStudyCollection>
  caseStudyGroup?: Maybe<CaseStudyGroup>
  caseStudyGroupCollection?: Maybe<CaseStudyGroupCollection>
  client?: Maybe<Client>
  clientCollection?: Maybe<ClientCollection>
  textWithImages?: Maybe<TextWithImages>
  textWithImagesCollection?: Maybe<TextWithImagesCollection>
  codeBlock?: Maybe<CodeBlock>
  codeBlockCollection?: Maybe<CodeBlockCollection>
  tech?: Maybe<Tech>
  techCollection?: Maybe<TechCollection>
  person?: Maybe<Person>
  personCollection?: Maybe<PersonCollection>
  release?: Maybe<Release>
  releaseCollection?: Maybe<ReleaseCollection>
  blogPost?: Maybe<BlogPost>
  blogPostCollection?: Maybe<BlogPostCollection>
  entryCollection?: Maybe<EntryCollection>
}

export type QueryAssetArgs = {
  id: Scalars['String']
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type QueryAssetCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
  where?: InputMaybe<AssetFilter>
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>
}

export type QueryCaseStudyArgs = {
  id: Scalars['String']
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type QueryCaseStudyCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
  where?: InputMaybe<CaseStudyFilter>
  order?: InputMaybe<Array<InputMaybe<CaseStudyOrder>>>
}

export type QueryCaseStudyGroupArgs = {
  id: Scalars['String']
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type QueryCaseStudyGroupCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
  where?: InputMaybe<CaseStudyGroupFilter>
  order?: InputMaybe<Array<InputMaybe<CaseStudyGroupOrder>>>
}

export type QueryClientArgs = {
  id: Scalars['String']
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type QueryClientCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
  where?: InputMaybe<ClientFilter>
  order?: InputMaybe<Array<InputMaybe<ClientOrder>>>
}

export type QueryTextWithImagesArgs = {
  id: Scalars['String']
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type QueryTextWithImagesCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
  where?: InputMaybe<TextWithImagesFilter>
  order?: InputMaybe<Array<InputMaybe<TextWithImagesOrder>>>
}

export type QueryCodeBlockArgs = {
  id: Scalars['String']
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type QueryCodeBlockCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
  where?: InputMaybe<CodeBlockFilter>
  order?: InputMaybe<Array<InputMaybe<CodeBlockOrder>>>
}

export type QueryTechArgs = {
  id: Scalars['String']
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type QueryTechCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
  where?: InputMaybe<TechFilter>
  order?: InputMaybe<Array<InputMaybe<TechOrder>>>
}

export type QueryPersonArgs = {
  id: Scalars['String']
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type QueryPersonCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
  where?: InputMaybe<PersonFilter>
  order?: InputMaybe<Array<InputMaybe<PersonOrder>>>
}

export type QueryReleaseArgs = {
  id: Scalars['String']
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type QueryReleaseCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
  where?: InputMaybe<ReleaseFilter>
  order?: InputMaybe<Array<InputMaybe<ReleaseOrder>>>
}

export type QueryBlogPostArgs = {
  id: Scalars['String']
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type QueryBlogPostCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
  where?: InputMaybe<BlogPostFilter>
  order?: InputMaybe<Array<InputMaybe<BlogPostOrder>>>
}

export type QueryEntryCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
  where?: InputMaybe<EntryFilter>
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset'
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  contentType?: Maybe<Scalars['String']>
  fileName?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Int']>
  url?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  linkedFrom?: Maybe<AssetLinkingCollections>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform?: InputMaybe<ImageTransformOptions>
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type Sys = {
  __typename?: 'Sys'
  id: Scalars['String']
  spaceId: Scalars['String']
  environmentId: Scalars['String']
  publishedAt?: Maybe<Scalars['DateTime']>
  firstPublishedAt?: Maybe<Scalars['DateTime']>
  publishedVersion?: Maybe<Scalars['Int']>
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata'
  tags: Array<Maybe<ContentfulTag>>
}

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag'
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type ImageTransformOptions = {
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>
}

export enum ImageResizeStrategy {
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB',
}

export enum ImageResizeFocus {
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
}

export enum ImageFormat {
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
  Webp = 'WEBP',
  Avif = 'AVIF',
}

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  caseStudyCollection?: Maybe<CaseStudyCollection>
  caseStudyGroupCollection?: Maybe<CaseStudyGroupCollection>
  clientCollection?: Maybe<ClientCollection>
  textWithImagesCollection?: Maybe<TextWithImagesCollection>
  techCollection?: Maybe<TechCollection>
  personCollection?: Maybe<PersonCollection>
  releaseCollection?: Maybe<ReleaseCollection>
  blogPostCollection?: Maybe<BlogPostCollection>
}

export type AssetLinkingCollectionsEntryCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type AssetLinkingCollectionsCaseStudyCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type AssetLinkingCollectionsCaseStudyGroupCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type AssetLinkingCollectionsClientCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type AssetLinkingCollectionsTextWithImagesCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type AssetLinkingCollectionsTechCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type AssetLinkingCollectionsPersonCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type AssetLinkingCollectionsReleaseCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type AssetLinkingCollectionsBlogPostCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type EntryCollection = {
  __typename?: 'EntryCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Entry>>
}

export type Entry = {
  sys: Sys
  contentfulMetadata: ContentfulMetadata
}

export type CaseStudyCollection = {
  __typename?: 'CaseStudyCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<CaseStudy>>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudy) */
export type CaseStudy = Entry & {
  __typename?: 'CaseStudy'
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<CaseStudyLinkingCollections>
  title?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['DateTime']>
  authorsCollection?: Maybe<CaseStudyAuthorsCollection>
  metaDescription?: Maybe<Scalars['String']>
  metaImage?: Maybe<Asset>
  industry?: Maybe<CaseStudyGroup>
  technology?: Maybe<CaseStudyGroup>
  cardStyle?: Maybe<Scalars['String']>
  quote?: Maybe<Scalars['String']>
  quoteAuthor?: Maybe<Person>
  improvementType?: Maybe<Scalars['String']>
  improvementPercentage?: Maybe<Scalars['Int']>
  cacheHitRate?: Maybe<Scalars['Float']>
  decreasedDatabasePressure?: Maybe<Scalars['Int']>
  body?: Maybe<CaseStudyBody>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudy) */
export type CaseStudyLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudy) */
export type CaseStudyTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudy) */
export type CaseStudySlugArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudy) */
export type CaseStudyPublishedAtArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudy) */
export type CaseStudyAuthorsCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudy) */
export type CaseStudyMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudy) */
export type CaseStudyMetaImageArgs = {
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudy) */
export type CaseStudyIndustryArgs = {
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudy) */
export type CaseStudyTechnologyArgs = {
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudy) */
export type CaseStudyCardStyleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudy) */
export type CaseStudyQuoteArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudy) */
export type CaseStudyQuoteAuthorArgs = {
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudy) */
export type CaseStudyImprovementTypeArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudy) */
export type CaseStudyImprovementPercentageArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudy) */
export type CaseStudyCacheHitRateArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudy) */
export type CaseStudyDecreasedDatabasePressureArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudy) */
export type CaseStudyBodyArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type CaseStudyLinkingCollections = {
  __typename?: 'CaseStudyLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type CaseStudyLinkingCollectionsEntryCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type CaseStudyAuthorsCollection = {
  __typename?: 'CaseStudyAuthorsCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Person>>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/person) */
export type Person = Entry & {
  __typename?: 'Person'
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<PersonLinkingCollections>
  name?: Maybe<Scalars['String']>
  avatar?: Maybe<Asset>
  twitterHandle?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['String']>
  company?: Maybe<Client>
  caseStudyImage?: Maybe<Asset>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/person) */
export type PersonLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/person) */
export type PersonNameArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/person) */
export type PersonAvatarArgs = {
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/person) */
export type PersonTwitterHandleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/person) */
export type PersonRoleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/person) */
export type PersonCompanyArgs = {
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/person) */
export type PersonCaseStudyImageArgs = {
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type PersonLinkingCollections = {
  __typename?: 'PersonLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  caseStudyCollection?: Maybe<CaseStudyCollection>
  blogPostCollection?: Maybe<BlogPostCollection>
}

export type PersonLinkingCollectionsEntryCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type PersonLinkingCollectionsCaseStudyCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type PersonLinkingCollectionsBlogPostCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type BlogPostCollection = {
  __typename?: 'BlogPostCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<BlogPost>>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/blogPost) */
export type BlogPost = Entry & {
  __typename?: 'BlogPost'
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<BlogPostLinkingCollections>
  title?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['DateTime']>
  authorsCollection?: Maybe<BlogPostAuthorsCollection>
  metaDescription?: Maybe<Scalars['String']>
  metaImage?: Maybe<Asset>
  heroImage?: Maybe<Asset>
  body?: Maybe<BlogPostBody>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/blogPost) */
export type BlogPostLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/blogPost) */
export type BlogPostTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/blogPost) */
export type BlogPostSlugArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/blogPost) */
export type BlogPostPublishedAtArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/blogPost) */
export type BlogPostAuthorsCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/blogPost) */
export type BlogPostMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/blogPost) */
export type BlogPostMetaImageArgs = {
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/blogPost) */
export type BlogPostHeroImageArgs = {
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/blogPost) */
export type BlogPostBodyArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type BlogPostLinkingCollections = {
  __typename?: 'BlogPostLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type BlogPostLinkingCollectionsEntryCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type BlogPostAuthorsCollection = {
  __typename?: 'BlogPostAuthorsCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Person>>
}

export type BlogPostBody = {
  __typename?: 'BlogPostBody'
  json: Scalars['JSON']
  links: BlogPostBodyLinks
}

export type BlogPostBodyLinks = {
  __typename?: 'BlogPostBodyLinks'
  entries: BlogPostBodyEntries
  assets: BlogPostBodyAssets
}

export type BlogPostBodyEntries = {
  __typename?: 'BlogPostBodyEntries'
  inline: Array<Maybe<Entry>>
  hyperlink: Array<Maybe<Entry>>
  block: Array<Maybe<Entry>>
}

export type BlogPostBodyAssets = {
  __typename?: 'BlogPostBodyAssets'
  hyperlink: Array<Maybe<Asset>>
  block: Array<Maybe<Asset>>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/client) */
export type Client = Entry & {
  __typename?: 'Client'
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<ClientLinkingCollections>
  name?: Maybe<Scalars['String']>
  logo?: Maybe<Asset>
  foundingDate?: Maybe<Scalars['DateTime']>
  techStackCollection?: Maybe<ClientTechStackCollection>
  teamSize?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/client) */
export type ClientLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/client) */
export type ClientNameArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/client) */
export type ClientLogoArgs = {
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/client) */
export type ClientFoundingDateArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/client) */
export type ClientTechStackCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/client) */
export type ClientTeamSizeArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type ClientLinkingCollections = {
  __typename?: 'ClientLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  personCollection?: Maybe<PersonCollection>
}

export type ClientLinkingCollectionsEntryCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type ClientLinkingCollectionsPersonCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type PersonCollection = {
  __typename?: 'PersonCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Person>>
}

export type ClientTechStackCollection = {
  __typename?: 'ClientTechStackCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Tech>>
}

/** Used for tech stack fields [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/tech) */
export type Tech = Entry & {
  __typename?: 'Tech'
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<TechLinkingCollections>
  name?: Maybe<Scalars['String']>
  logo?: Maybe<Asset>
}

/** Used for tech stack fields [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/tech) */
export type TechLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Used for tech stack fields [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/tech) */
export type TechNameArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Used for tech stack fields [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/tech) */
export type TechLogoArgs = {
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type TechLinkingCollections = {
  __typename?: 'TechLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  clientCollection?: Maybe<ClientCollection>
}

export type TechLinkingCollectionsEntryCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type TechLinkingCollectionsClientCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type ClientCollection = {
  __typename?: 'ClientCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Client>>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudyGroup) */
export type CaseStudyGroup = Entry & {
  __typename?: 'CaseStudyGroup'
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<CaseStudyGroupLinkingCollections>
  title?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  metaDescription?: Maybe<Scalars['String']>
  metaImage?: Maybe<Asset>
  subline?: Maybe<Scalars['String']>
  body?: Maybe<CaseStudyGroupBody>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudyGroup) */
export type CaseStudyGroupLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudyGroup) */
export type CaseStudyGroupTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudyGroup) */
export type CaseStudyGroupTypeArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudyGroup) */
export type CaseStudyGroupSlugArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudyGroup) */
export type CaseStudyGroupMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudyGroup) */
export type CaseStudyGroupMetaImageArgs = {
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudyGroup) */
export type CaseStudyGroupSublineArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/caseStudyGroup) */
export type CaseStudyGroupBodyArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type CaseStudyGroupLinkingCollections = {
  __typename?: 'CaseStudyGroupLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  caseStudyCollection?: Maybe<CaseStudyCollection>
}

export type CaseStudyGroupLinkingCollectionsEntryCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type CaseStudyGroupLinkingCollectionsCaseStudyCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type CaseStudyGroupBody = {
  __typename?: 'CaseStudyGroupBody'
  json: Scalars['JSON']
  links: CaseStudyGroupBodyLinks
}

export type CaseStudyGroupBodyLinks = {
  __typename?: 'CaseStudyGroupBodyLinks'
  entries: CaseStudyGroupBodyEntries
  assets: CaseStudyGroupBodyAssets
}

export type CaseStudyGroupBodyEntries = {
  __typename?: 'CaseStudyGroupBodyEntries'
  inline: Array<Maybe<Entry>>
  hyperlink: Array<Maybe<Entry>>
  block: Array<Maybe<Entry>>
}

export type CaseStudyGroupBodyAssets = {
  __typename?: 'CaseStudyGroupBodyAssets'
  hyperlink: Array<Maybe<Asset>>
  block: Array<Maybe<Asset>>
}

export type CaseStudyBody = {
  __typename?: 'CaseStudyBody'
  json: Scalars['JSON']
  links: CaseStudyBodyLinks
}

export type CaseStudyBodyLinks = {
  __typename?: 'CaseStudyBodyLinks'
  entries: CaseStudyBodyEntries
  assets: CaseStudyBodyAssets
}

export type CaseStudyBodyEntries = {
  __typename?: 'CaseStudyBodyEntries'
  inline: Array<Maybe<Entry>>
  hyperlink: Array<Maybe<Entry>>
  block: Array<Maybe<Entry>>
}

export type CaseStudyBodyAssets = {
  __typename?: 'CaseStudyBodyAssets'
  hyperlink: Array<Maybe<Asset>>
  block: Array<Maybe<Asset>>
}

export type CaseStudyGroupCollection = {
  __typename?: 'CaseStudyGroupCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<CaseStudyGroup>>
}

export type TextWithImagesCollection = {
  __typename?: 'TextWithImagesCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<TextWithImages>>
}

/** Supposed to be used by Rich Text fields [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/textWithImages) */
export type TextWithImages = Entry & {
  __typename?: 'TextWithImages'
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<TextWithImagesLinkingCollections>
  title?: Maybe<Scalars['String']>
  text?: Maybe<TextWithImagesText>
  imagesCollection?: Maybe<AssetCollection>
}

/** Supposed to be used by Rich Text fields [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/textWithImages) */
export type TextWithImagesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Supposed to be used by Rich Text fields [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/textWithImages) */
export type TextWithImagesTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Supposed to be used by Rich Text fields [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/textWithImages) */
export type TextWithImagesTextArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Supposed to be used by Rich Text fields [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/textWithImages) */
export type TextWithImagesImagesCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type TextWithImagesLinkingCollections = {
  __typename?: 'TextWithImagesLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type TextWithImagesLinkingCollectionsEntryCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type TextWithImagesText = {
  __typename?: 'TextWithImagesText'
  json: Scalars['JSON']
  links: TextWithImagesTextLinks
}

export type TextWithImagesTextLinks = {
  __typename?: 'TextWithImagesTextLinks'
  entries: TextWithImagesTextEntries
  assets: TextWithImagesTextAssets
}

export type TextWithImagesTextEntries = {
  __typename?: 'TextWithImagesTextEntries'
  inline: Array<Maybe<Entry>>
  hyperlink: Array<Maybe<Entry>>
  block: Array<Maybe<Entry>>
}

export type TextWithImagesTextAssets = {
  __typename?: 'TextWithImagesTextAssets'
  hyperlink: Array<Maybe<Asset>>
  block: Array<Maybe<Asset>>
}

export type AssetCollection = {
  __typename?: 'AssetCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Asset>>
}

export type TechCollection = {
  __typename?: 'TechCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Tech>>
}

export type ReleaseCollection = {
  __typename?: 'ReleaseCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Release>>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/release) */
export type Release = Entry & {
  __typename?: 'Release'
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<ReleaseLinkingCollections>
  title?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['DateTime']>
  metaDescription?: Maybe<Scalars['String']>
  metaImage?: Maybe<Asset>
  heroImage?: Maybe<Asset>
  body?: Maybe<ReleaseBody>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/release) */
export type ReleaseLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/release) */
export type ReleaseTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/release) */
export type ReleaseSlugArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/release) */
export type ReleasePublishedAtArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/release) */
export type ReleaseMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/release) */
export type ReleaseMetaImageArgs = {
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/release) */
export type ReleaseHeroImageArgs = {
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/release) */
export type ReleaseBodyArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type ReleaseLinkingCollections = {
  __typename?: 'ReleaseLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type ReleaseLinkingCollectionsEntryCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type ReleaseBody = {
  __typename?: 'ReleaseBody'
  json: Scalars['JSON']
  links: ReleaseBodyLinks
}

export type ReleaseBodyLinks = {
  __typename?: 'ReleaseBodyLinks'
  entries: ReleaseBodyEntries
  assets: ReleaseBodyAssets
}

export type ReleaseBodyEntries = {
  __typename?: 'ReleaseBodyEntries'
  inline: Array<Maybe<Entry>>
  hyperlink: Array<Maybe<Entry>>
  block: Array<Maybe<Entry>>
}

export type ReleaseBodyAssets = {
  __typename?: 'ReleaseBodyAssets'
  hyperlink: Array<Maybe<Asset>>
  block: Array<Maybe<Asset>>
}

export type AssetFilter = {
  sys?: InputMaybe<SysFilter>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  title_exists?: InputMaybe<Scalars['Boolean']>
  title?: InputMaybe<Scalars['String']>
  title_not?: InputMaybe<Scalars['String']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  title_contains?: InputMaybe<Scalars['String']>
  title_not_contains?: InputMaybe<Scalars['String']>
  description_exists?: InputMaybe<Scalars['Boolean']>
  description?: InputMaybe<Scalars['String']>
  description_not?: InputMaybe<Scalars['String']>
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  description_contains?: InputMaybe<Scalars['String']>
  description_not_contains?: InputMaybe<Scalars['String']>
  url_exists?: InputMaybe<Scalars['Boolean']>
  url?: InputMaybe<Scalars['String']>
  url_not?: InputMaybe<Scalars['String']>
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  url_contains?: InputMaybe<Scalars['String']>
  url_not_contains?: InputMaybe<Scalars['String']>
  size_exists?: InputMaybe<Scalars['Boolean']>
  size?: InputMaybe<Scalars['Int']>
  size_not?: InputMaybe<Scalars['Int']>
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  size_gt?: InputMaybe<Scalars['Int']>
  size_gte?: InputMaybe<Scalars['Int']>
  size_lt?: InputMaybe<Scalars['Int']>
  size_lte?: InputMaybe<Scalars['Int']>
  contentType_exists?: InputMaybe<Scalars['Boolean']>
  contentType?: InputMaybe<Scalars['String']>
  contentType_not?: InputMaybe<Scalars['String']>
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentType_contains?: InputMaybe<Scalars['String']>
  contentType_not_contains?: InputMaybe<Scalars['String']>
  fileName_exists?: InputMaybe<Scalars['Boolean']>
  fileName?: InputMaybe<Scalars['String']>
  fileName_not?: InputMaybe<Scalars['String']>
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  fileName_contains?: InputMaybe<Scalars['String']>
  fileName_not_contains?: InputMaybe<Scalars['String']>
  width_exists?: InputMaybe<Scalars['Boolean']>
  width?: InputMaybe<Scalars['Int']>
  width_not?: InputMaybe<Scalars['Int']>
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  width_gt?: InputMaybe<Scalars['Int']>
  width_gte?: InputMaybe<Scalars['Int']>
  width_lt?: InputMaybe<Scalars['Int']>
  width_lte?: InputMaybe<Scalars['Int']>
  height_exists?: InputMaybe<Scalars['Boolean']>
  height?: InputMaybe<Scalars['Int']>
  height_not?: InputMaybe<Scalars['Int']>
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  height_gt?: InputMaybe<Scalars['Int']>
  height_gte?: InputMaybe<Scalars['Int']>
  height_lt?: InputMaybe<Scalars['Int']>
  height_lte?: InputMaybe<Scalars['Int']>
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>
}

export type SysFilter = {
  id_exists?: InputMaybe<Scalars['Boolean']>
  id?: InputMaybe<Scalars['String']>
  id_not?: InputMaybe<Scalars['String']>
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  id_contains?: InputMaybe<Scalars['String']>
  id_not_contains?: InputMaybe<Scalars['String']>
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>
  publishedVersion?: InputMaybe<Scalars['Float']>
  publishedVersion_not?: InputMaybe<Scalars['Float']>
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  publishedVersion_gt?: InputMaybe<Scalars['Float']>
  publishedVersion_gte?: InputMaybe<Scalars['Float']>
  publishedVersion_lt?: InputMaybe<Scalars['Float']>
  publishedVersion_lte?: InputMaybe<Scalars['Float']>
}

export type ContentfulMetadataFilter = {
  tags_exists?: InputMaybe<Scalars['Boolean']>
  tags?: InputMaybe<ContentfulMetadataTagsFilter>
}

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export enum AssetOrder {
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type CaseStudyFilter = {
  industry?: InputMaybe<CfCaseStudyGroupNestedFilter>
  technology?: InputMaybe<CfCaseStudyGroupNestedFilter>
  quoteAuthor?: InputMaybe<CfPersonNestedFilter>
  sys?: InputMaybe<SysFilter>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  title_exists?: InputMaybe<Scalars['Boolean']>
  title?: InputMaybe<Scalars['String']>
  title_not?: InputMaybe<Scalars['String']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  title_contains?: InputMaybe<Scalars['String']>
  title_not_contains?: InputMaybe<Scalars['String']>
  slug_exists?: InputMaybe<Scalars['Boolean']>
  slug?: InputMaybe<Scalars['String']>
  slug_not?: InputMaybe<Scalars['String']>
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  slug_contains?: InputMaybe<Scalars['String']>
  slug_not_contains?: InputMaybe<Scalars['String']>
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  authorsCollection_exists?: InputMaybe<Scalars['Boolean']>
  metaDescription_exists?: InputMaybe<Scalars['Boolean']>
  metaDescription?: InputMaybe<Scalars['String']>
  metaDescription_not?: InputMaybe<Scalars['String']>
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescription_contains?: InputMaybe<Scalars['String']>
  metaDescription_not_contains?: InputMaybe<Scalars['String']>
  metaImage_exists?: InputMaybe<Scalars['Boolean']>
  industry_exists?: InputMaybe<Scalars['Boolean']>
  technology_exists?: InputMaybe<Scalars['Boolean']>
  cardStyle_exists?: InputMaybe<Scalars['Boolean']>
  cardStyle?: InputMaybe<Scalars['String']>
  cardStyle_not?: InputMaybe<Scalars['String']>
  cardStyle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  cardStyle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  cardStyle_contains?: InputMaybe<Scalars['String']>
  cardStyle_not_contains?: InputMaybe<Scalars['String']>
  quote_exists?: InputMaybe<Scalars['Boolean']>
  quote?: InputMaybe<Scalars['String']>
  quote_not?: InputMaybe<Scalars['String']>
  quote_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  quote_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  quote_contains?: InputMaybe<Scalars['String']>
  quote_not_contains?: InputMaybe<Scalars['String']>
  quoteAuthor_exists?: InputMaybe<Scalars['Boolean']>
  improvementType_exists?: InputMaybe<Scalars['Boolean']>
  improvementType?: InputMaybe<Scalars['String']>
  improvementType_not?: InputMaybe<Scalars['String']>
  improvementType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  improvementType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  improvementType_contains?: InputMaybe<Scalars['String']>
  improvementType_not_contains?: InputMaybe<Scalars['String']>
  improvementPercentage_exists?: InputMaybe<Scalars['Boolean']>
  improvementPercentage?: InputMaybe<Scalars['Int']>
  improvementPercentage_not?: InputMaybe<Scalars['Int']>
  improvementPercentage_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  improvementPercentage_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  improvementPercentage_gt?: InputMaybe<Scalars['Int']>
  improvementPercentage_gte?: InputMaybe<Scalars['Int']>
  improvementPercentage_lt?: InputMaybe<Scalars['Int']>
  improvementPercentage_lte?: InputMaybe<Scalars['Int']>
  cacheHitRate_exists?: InputMaybe<Scalars['Boolean']>
  cacheHitRate?: InputMaybe<Scalars['Float']>
  cacheHitRate_not?: InputMaybe<Scalars['Float']>
  cacheHitRate_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  cacheHitRate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  cacheHitRate_gt?: InputMaybe<Scalars['Float']>
  cacheHitRate_gte?: InputMaybe<Scalars['Float']>
  cacheHitRate_lt?: InputMaybe<Scalars['Float']>
  cacheHitRate_lte?: InputMaybe<Scalars['Float']>
  decreasedDatabasePressure_exists?: InputMaybe<Scalars['Boolean']>
  decreasedDatabasePressure?: InputMaybe<Scalars['Int']>
  decreasedDatabasePressure_not?: InputMaybe<Scalars['Int']>
  decreasedDatabasePressure_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  decreasedDatabasePressure_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['Int']>>
  >
  decreasedDatabasePressure_gt?: InputMaybe<Scalars['Int']>
  decreasedDatabasePressure_gte?: InputMaybe<Scalars['Int']>
  decreasedDatabasePressure_lt?: InputMaybe<Scalars['Int']>
  decreasedDatabasePressure_lte?: InputMaybe<Scalars['Int']>
  body_exists?: InputMaybe<Scalars['Boolean']>
  body_contains?: InputMaybe<Scalars['String']>
  body_not_contains?: InputMaybe<Scalars['String']>
  OR?: InputMaybe<Array<InputMaybe<CaseStudyFilter>>>
  AND?: InputMaybe<Array<InputMaybe<CaseStudyFilter>>>
}

export type CfCaseStudyGroupNestedFilter = {
  sys?: InputMaybe<SysFilter>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  title_exists?: InputMaybe<Scalars['Boolean']>
  title?: InputMaybe<Scalars['String']>
  title_not?: InputMaybe<Scalars['String']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  title_contains?: InputMaybe<Scalars['String']>
  title_not_contains?: InputMaybe<Scalars['String']>
  type_exists?: InputMaybe<Scalars['Boolean']>
  type?: InputMaybe<Scalars['String']>
  type_not?: InputMaybe<Scalars['String']>
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  type_contains?: InputMaybe<Scalars['String']>
  type_not_contains?: InputMaybe<Scalars['String']>
  slug_exists?: InputMaybe<Scalars['Boolean']>
  slug?: InputMaybe<Scalars['String']>
  slug_not?: InputMaybe<Scalars['String']>
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  slug_contains?: InputMaybe<Scalars['String']>
  slug_not_contains?: InputMaybe<Scalars['String']>
  metaDescription_exists?: InputMaybe<Scalars['Boolean']>
  metaDescription?: InputMaybe<Scalars['String']>
  metaDescription_not?: InputMaybe<Scalars['String']>
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescription_contains?: InputMaybe<Scalars['String']>
  metaDescription_not_contains?: InputMaybe<Scalars['String']>
  metaImage_exists?: InputMaybe<Scalars['Boolean']>
  subline_exists?: InputMaybe<Scalars['Boolean']>
  subline?: InputMaybe<Scalars['String']>
  subline_not?: InputMaybe<Scalars['String']>
  subline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  subline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  subline_contains?: InputMaybe<Scalars['String']>
  subline_not_contains?: InputMaybe<Scalars['String']>
  body_exists?: InputMaybe<Scalars['Boolean']>
  body_contains?: InputMaybe<Scalars['String']>
  body_not_contains?: InputMaybe<Scalars['String']>
  OR?: InputMaybe<Array<InputMaybe<CfCaseStudyGroupNestedFilter>>>
  AND?: InputMaybe<Array<InputMaybe<CfCaseStudyGroupNestedFilter>>>
}

export type CfPersonNestedFilter = {
  sys?: InputMaybe<SysFilter>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  name_exists?: InputMaybe<Scalars['Boolean']>
  name?: InputMaybe<Scalars['String']>
  name_not?: InputMaybe<Scalars['String']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_contains?: InputMaybe<Scalars['String']>
  name_not_contains?: InputMaybe<Scalars['String']>
  avatar_exists?: InputMaybe<Scalars['Boolean']>
  twitterHandle_exists?: InputMaybe<Scalars['Boolean']>
  twitterHandle?: InputMaybe<Scalars['String']>
  twitterHandle_not?: InputMaybe<Scalars['String']>
  twitterHandle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  twitterHandle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  twitterHandle_contains?: InputMaybe<Scalars['String']>
  twitterHandle_not_contains?: InputMaybe<Scalars['String']>
  role_exists?: InputMaybe<Scalars['Boolean']>
  role?: InputMaybe<Scalars['String']>
  role_not?: InputMaybe<Scalars['String']>
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  role_contains?: InputMaybe<Scalars['String']>
  role_not_contains?: InputMaybe<Scalars['String']>
  company_exists?: InputMaybe<Scalars['Boolean']>
  caseStudyImage_exists?: InputMaybe<Scalars['Boolean']>
  OR?: InputMaybe<Array<InputMaybe<CfPersonNestedFilter>>>
  AND?: InputMaybe<Array<InputMaybe<CfPersonNestedFilter>>>
}

export enum CaseStudyOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  CardStyleAsc = 'cardStyle_ASC',
  CardStyleDesc = 'cardStyle_DESC',
  ImprovementTypeAsc = 'improvementType_ASC',
  ImprovementTypeDesc = 'improvementType_DESC',
  ImprovementPercentageAsc = 'improvementPercentage_ASC',
  ImprovementPercentageDesc = 'improvementPercentage_DESC',
  CacheHitRateAsc = 'cacheHitRate_ASC',
  CacheHitRateDesc = 'cacheHitRate_DESC',
  DecreasedDatabasePressureAsc = 'decreasedDatabasePressure_ASC',
  DecreasedDatabasePressureDesc = 'decreasedDatabasePressure_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type CaseStudyGroupFilter = {
  sys?: InputMaybe<SysFilter>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  title_exists?: InputMaybe<Scalars['Boolean']>
  title?: InputMaybe<Scalars['String']>
  title_not?: InputMaybe<Scalars['String']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  title_contains?: InputMaybe<Scalars['String']>
  title_not_contains?: InputMaybe<Scalars['String']>
  type_exists?: InputMaybe<Scalars['Boolean']>
  type?: InputMaybe<Scalars['String']>
  type_not?: InputMaybe<Scalars['String']>
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  type_contains?: InputMaybe<Scalars['String']>
  type_not_contains?: InputMaybe<Scalars['String']>
  slug_exists?: InputMaybe<Scalars['Boolean']>
  slug?: InputMaybe<Scalars['String']>
  slug_not?: InputMaybe<Scalars['String']>
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  slug_contains?: InputMaybe<Scalars['String']>
  slug_not_contains?: InputMaybe<Scalars['String']>
  metaDescription_exists?: InputMaybe<Scalars['Boolean']>
  metaDescription?: InputMaybe<Scalars['String']>
  metaDescription_not?: InputMaybe<Scalars['String']>
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescription_contains?: InputMaybe<Scalars['String']>
  metaDescription_not_contains?: InputMaybe<Scalars['String']>
  metaImage_exists?: InputMaybe<Scalars['Boolean']>
  subline_exists?: InputMaybe<Scalars['Boolean']>
  subline?: InputMaybe<Scalars['String']>
  subline_not?: InputMaybe<Scalars['String']>
  subline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  subline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  subline_contains?: InputMaybe<Scalars['String']>
  subline_not_contains?: InputMaybe<Scalars['String']>
  body_exists?: InputMaybe<Scalars['Boolean']>
  body_contains?: InputMaybe<Scalars['String']>
  body_not_contains?: InputMaybe<Scalars['String']>
  OR?: InputMaybe<Array<InputMaybe<CaseStudyGroupFilter>>>
  AND?: InputMaybe<Array<InputMaybe<CaseStudyGroupFilter>>>
}

export enum CaseStudyGroupOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ClientFilter = {
  sys?: InputMaybe<SysFilter>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  name_exists?: InputMaybe<Scalars['Boolean']>
  name?: InputMaybe<Scalars['String']>
  name_not?: InputMaybe<Scalars['String']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_contains?: InputMaybe<Scalars['String']>
  name_not_contains?: InputMaybe<Scalars['String']>
  logo_exists?: InputMaybe<Scalars['Boolean']>
  foundingDate_exists?: InputMaybe<Scalars['Boolean']>
  foundingDate?: InputMaybe<Scalars['DateTime']>
  foundingDate_not?: InputMaybe<Scalars['DateTime']>
  foundingDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  foundingDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  foundingDate_gt?: InputMaybe<Scalars['DateTime']>
  foundingDate_gte?: InputMaybe<Scalars['DateTime']>
  foundingDate_lt?: InputMaybe<Scalars['DateTime']>
  foundingDate_lte?: InputMaybe<Scalars['DateTime']>
  techStackCollection_exists?: InputMaybe<Scalars['Boolean']>
  teamSize_exists?: InputMaybe<Scalars['Boolean']>
  teamSize?: InputMaybe<Scalars['String']>
  teamSize_not?: InputMaybe<Scalars['String']>
  teamSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  teamSize_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  teamSize_contains?: InputMaybe<Scalars['String']>
  teamSize_not_contains?: InputMaybe<Scalars['String']>
  OR?: InputMaybe<Array<InputMaybe<ClientFilter>>>
  AND?: InputMaybe<Array<InputMaybe<ClientFilter>>>
}

export enum ClientOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  FoundingDateAsc = 'foundingDate_ASC',
  FoundingDateDesc = 'foundingDate_DESC',
  TeamSizeAsc = 'teamSize_ASC',
  TeamSizeDesc = 'teamSize_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type TextWithImagesFilter = {
  sys?: InputMaybe<SysFilter>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  title_exists?: InputMaybe<Scalars['Boolean']>
  title?: InputMaybe<Scalars['String']>
  title_not?: InputMaybe<Scalars['String']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  title_contains?: InputMaybe<Scalars['String']>
  title_not_contains?: InputMaybe<Scalars['String']>
  text_exists?: InputMaybe<Scalars['Boolean']>
  text_contains?: InputMaybe<Scalars['String']>
  text_not_contains?: InputMaybe<Scalars['String']>
  imagesCollection_exists?: InputMaybe<Scalars['Boolean']>
  OR?: InputMaybe<Array<InputMaybe<TextWithImagesFilter>>>
  AND?: InputMaybe<Array<InputMaybe<TextWithImagesFilter>>>
}

export enum TextWithImagesOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** Supposed to be used by Rich Text fields [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/codeBlock) */
export type CodeBlock = Entry & {
  __typename?: 'CodeBlock'
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<CodeBlockLinkingCollections>
  code?: Maybe<Scalars['String']>
  language?: Maybe<Scalars['String']>
}

/** Supposed to be used by Rich Text fields [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/codeBlock) */
export type CodeBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Supposed to be used by Rich Text fields [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/codeBlock) */
export type CodeBlockCodeArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Supposed to be used by Rich Text fields [See type definition](https://app.contentful.com/spaces/yq1dddfl2vc7/content_types/codeBlock) */
export type CodeBlockLanguageArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type CodeBlockLinkingCollections = {
  __typename?: 'CodeBlockLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type CodeBlockLinkingCollectionsEntryCollectionArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}

export type CodeBlockCollection = {
  __typename?: 'CodeBlockCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<CodeBlock>>
}

export type CodeBlockFilter = {
  sys?: InputMaybe<SysFilter>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  code_exists?: InputMaybe<Scalars['Boolean']>
  code?: InputMaybe<Scalars['String']>
  code_not?: InputMaybe<Scalars['String']>
  code_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  code_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  code_contains?: InputMaybe<Scalars['String']>
  code_not_contains?: InputMaybe<Scalars['String']>
  language_exists?: InputMaybe<Scalars['Boolean']>
  language?: InputMaybe<Scalars['String']>
  language_not?: InputMaybe<Scalars['String']>
  language_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  language_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  language_contains?: InputMaybe<Scalars['String']>
  language_not_contains?: InputMaybe<Scalars['String']>
  OR?: InputMaybe<Array<InputMaybe<CodeBlockFilter>>>
  AND?: InputMaybe<Array<InputMaybe<CodeBlockFilter>>>
}

export enum CodeBlockOrder {
  LanguageAsc = 'language_ASC',
  LanguageDesc = 'language_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type TechFilter = {
  sys?: InputMaybe<SysFilter>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  name_exists?: InputMaybe<Scalars['Boolean']>
  name?: InputMaybe<Scalars['String']>
  name_not?: InputMaybe<Scalars['String']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_contains?: InputMaybe<Scalars['String']>
  name_not_contains?: InputMaybe<Scalars['String']>
  logo_exists?: InputMaybe<Scalars['Boolean']>
  OR?: InputMaybe<Array<InputMaybe<TechFilter>>>
  AND?: InputMaybe<Array<InputMaybe<TechFilter>>>
}

export enum TechOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type PersonFilter = {
  company?: InputMaybe<CfClientNestedFilter>
  sys?: InputMaybe<SysFilter>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  name_exists?: InputMaybe<Scalars['Boolean']>
  name?: InputMaybe<Scalars['String']>
  name_not?: InputMaybe<Scalars['String']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_contains?: InputMaybe<Scalars['String']>
  name_not_contains?: InputMaybe<Scalars['String']>
  avatar_exists?: InputMaybe<Scalars['Boolean']>
  twitterHandle_exists?: InputMaybe<Scalars['Boolean']>
  twitterHandle?: InputMaybe<Scalars['String']>
  twitterHandle_not?: InputMaybe<Scalars['String']>
  twitterHandle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  twitterHandle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  twitterHandle_contains?: InputMaybe<Scalars['String']>
  twitterHandle_not_contains?: InputMaybe<Scalars['String']>
  role_exists?: InputMaybe<Scalars['Boolean']>
  role?: InputMaybe<Scalars['String']>
  role_not?: InputMaybe<Scalars['String']>
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  role_contains?: InputMaybe<Scalars['String']>
  role_not_contains?: InputMaybe<Scalars['String']>
  company_exists?: InputMaybe<Scalars['Boolean']>
  caseStudyImage_exists?: InputMaybe<Scalars['Boolean']>
  OR?: InputMaybe<Array<InputMaybe<PersonFilter>>>
  AND?: InputMaybe<Array<InputMaybe<PersonFilter>>>
}

export type CfClientNestedFilter = {
  sys?: InputMaybe<SysFilter>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  name_exists?: InputMaybe<Scalars['Boolean']>
  name?: InputMaybe<Scalars['String']>
  name_not?: InputMaybe<Scalars['String']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_contains?: InputMaybe<Scalars['String']>
  name_not_contains?: InputMaybe<Scalars['String']>
  logo_exists?: InputMaybe<Scalars['Boolean']>
  foundingDate_exists?: InputMaybe<Scalars['Boolean']>
  foundingDate?: InputMaybe<Scalars['DateTime']>
  foundingDate_not?: InputMaybe<Scalars['DateTime']>
  foundingDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  foundingDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  foundingDate_gt?: InputMaybe<Scalars['DateTime']>
  foundingDate_gte?: InputMaybe<Scalars['DateTime']>
  foundingDate_lt?: InputMaybe<Scalars['DateTime']>
  foundingDate_lte?: InputMaybe<Scalars['DateTime']>
  techStackCollection_exists?: InputMaybe<Scalars['Boolean']>
  teamSize_exists?: InputMaybe<Scalars['Boolean']>
  teamSize?: InputMaybe<Scalars['String']>
  teamSize_not?: InputMaybe<Scalars['String']>
  teamSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  teamSize_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  teamSize_contains?: InputMaybe<Scalars['String']>
  teamSize_not_contains?: InputMaybe<Scalars['String']>
  OR?: InputMaybe<Array<InputMaybe<CfClientNestedFilter>>>
  AND?: InputMaybe<Array<InputMaybe<CfClientNestedFilter>>>
}

export enum PersonOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TwitterHandleAsc = 'twitterHandle_ASC',
  TwitterHandleDesc = 'twitterHandle_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ReleaseFilter = {
  sys?: InputMaybe<SysFilter>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  title_exists?: InputMaybe<Scalars['Boolean']>
  title?: InputMaybe<Scalars['String']>
  title_not?: InputMaybe<Scalars['String']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  title_contains?: InputMaybe<Scalars['String']>
  title_not_contains?: InputMaybe<Scalars['String']>
  slug_exists?: InputMaybe<Scalars['Boolean']>
  slug?: InputMaybe<Scalars['String']>
  slug_not?: InputMaybe<Scalars['String']>
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  slug_contains?: InputMaybe<Scalars['String']>
  slug_not_contains?: InputMaybe<Scalars['String']>
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  metaDescription_exists?: InputMaybe<Scalars['Boolean']>
  metaDescription?: InputMaybe<Scalars['String']>
  metaDescription_not?: InputMaybe<Scalars['String']>
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescription_contains?: InputMaybe<Scalars['String']>
  metaDescription_not_contains?: InputMaybe<Scalars['String']>
  metaImage_exists?: InputMaybe<Scalars['Boolean']>
  heroImage_exists?: InputMaybe<Scalars['Boolean']>
  body_exists?: InputMaybe<Scalars['Boolean']>
  body_contains?: InputMaybe<Scalars['String']>
  body_not_contains?: InputMaybe<Scalars['String']>
  OR?: InputMaybe<Array<InputMaybe<ReleaseFilter>>>
  AND?: InputMaybe<Array<InputMaybe<ReleaseFilter>>>
}

export enum ReleaseOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type BlogPostFilter = {
  sys?: InputMaybe<SysFilter>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  title_exists?: InputMaybe<Scalars['Boolean']>
  title?: InputMaybe<Scalars['String']>
  title_not?: InputMaybe<Scalars['String']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  title_contains?: InputMaybe<Scalars['String']>
  title_not_contains?: InputMaybe<Scalars['String']>
  slug_exists?: InputMaybe<Scalars['Boolean']>
  slug?: InputMaybe<Scalars['String']>
  slug_not?: InputMaybe<Scalars['String']>
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  slug_contains?: InputMaybe<Scalars['String']>
  slug_not_contains?: InputMaybe<Scalars['String']>
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  authorsCollection_exists?: InputMaybe<Scalars['Boolean']>
  metaDescription_exists?: InputMaybe<Scalars['Boolean']>
  metaDescription?: InputMaybe<Scalars['String']>
  metaDescription_not?: InputMaybe<Scalars['String']>
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  metaDescription_contains?: InputMaybe<Scalars['String']>
  metaDescription_not_contains?: InputMaybe<Scalars['String']>
  metaImage_exists?: InputMaybe<Scalars['Boolean']>
  heroImage_exists?: InputMaybe<Scalars['Boolean']>
  body_exists?: InputMaybe<Scalars['Boolean']>
  body_contains?: InputMaybe<Scalars['String']>
  body_not_contains?: InputMaybe<Scalars['String']>
  OR?: InputMaybe<Array<InputMaybe<BlogPostFilter>>>
  AND?: InputMaybe<Array<InputMaybe<BlogPostFilter>>>
}

export enum BlogPostOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type EntryFilter = {
  sys?: InputMaybe<SysFilter>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>
}

export enum EntryOrder {
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}
