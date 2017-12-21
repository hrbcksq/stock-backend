export function excludeByPridicate<T, U>(target: Array<T>, excludes: Array<U>, predicate: (x: T, y: U) => boolean) {
    return target.filter((targeItem) => excludes.findIndex((excludeItem) => predicate(targeItem, excludeItem)) === -1);
}

export function excludeByRef<T>(target: Array<T>, excludes: Array<T>) {
    return target.filter((item) => excludes.indexOf(item) === -1);
}

export function selectByPredicate<T, U>(target: Array<T>, selects: Array<U>, predicate: (x: T, y: U) => boolean) {
  return target.filter((targetItem) => selects.findIndex((includeItem) => predicate(targetItem, includeItem)) !== -1);
}

// Similar to SQL select Distinct statement
export function distinct<T>(target: Array<T>, predicate: (x: T, y: T) => boolean) {
  return target.filter((value, index, self) => self.findIndex(item => predicate(item, value)) === index);
}
