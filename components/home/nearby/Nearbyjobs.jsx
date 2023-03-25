import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./nearbyjobs.style";
import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hook/useFetch";

const Nearbyjobs = () => {
    const router = useRouter();
    const { data, isLoading, error } = useFetch("search", {
        query: "React developer",
        num_pages: "1",
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Job aux alentours</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Tout afficher</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size="large" color={COLORS.primary} />
                ) : (
                    data.map((job) => (
                        <NearbyJobCard
                            job={job}
                            key={`job-proche-${job?.job_id}`}
                            handleNavigate={() =>
                                router.push(`/job-details/${job.job_id}`)
                            }
                        />
                    ))
                )}
            </View>
        </View>
    );
};

export default Nearbyjobs;
