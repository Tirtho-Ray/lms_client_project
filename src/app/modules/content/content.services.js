import { Content } from "./content.model";

const createContentInDB = async (payload) => {
    const content = await Content.create(payload);
    return content;
};

const getAllContents = async () => {
    const contents = await Content.find();
    return contents;
};


const getContentById = async (id) => {
    const content = await Content.findById(id);
    return content;
};


const updateContentById = async (id, payload) => {
    const updatedContent = await Content.findByIdAndUpdate(id, payload, { new: true });
    return updatedContent;
};


const deleteContentById = async (id) => {
    const deletedContent = await Content.findByIdAndDelete(id);
    return deletedContent;
};

export const ContentServices = {
    createContentInDB,
    getAllContents,
    getContentById,
    updateContentById,
    deleteContentById,
};
