type ITagList = (string | null)[] | null;

export const mapTags = (tagList: ITagList): string | null => {
  if (!tagList || tagList.length === 0) {
    return null;
  }

  const filteredByNullValues: ITagList = tagList.filter((tag) => tag !== null);

  if (!filteredByNullValues || filteredByNullValues.length === 0) {
    return null;
  }

  const filteredByJobofferTag: ITagList = filteredByNullValues.filter(
    (tag) => tag !== null && tag !== "joboffer"
  );

  if (!filteredByJobofferTag || filteredByJobofferTag.length === 0) {
    return null;
  }

  return filteredByJobofferTag[0]?.toLocaleLowerCase() as string;
};
