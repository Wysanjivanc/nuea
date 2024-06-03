interface HasID {
  id: string;
}

function getUserProp<T extends HasID, K extends keyof T>(obj: T, prop: K): T[K] | null {
  if (obj && prop in obj) {
    return obj[prop];
  }
  return null;
}
